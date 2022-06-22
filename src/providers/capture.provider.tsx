import { Typography } from '@mui/material';
import * as React from 'react';
import { createContext } from "react";
import useUserAgent from '../hooks/useUserAgent';
import { Details, FCC, Result } from "../models";

export interface CaptureContextState {
    capture: () => void;
    downloadImage: () => void;
    copyText: () => void;
    result?: Result;
    loading: boolean;
}

const defaultContext: CaptureContextState = {
    capture: () => { },
    downloadImage: () => { },
    copyText: () => { },
    loading: false,
};

const CaptureContext = createContext<CaptureContextState>(defaultContext);
const CaptureProvider: FCC = ({ children }) => {
    const { browser, os, engine } = useUserAgent();
    const [result, setResult] = React.useState<Result>();
    const [loading, setLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        chrome.storage.local.get('result').then((res: { result: Result }) => {
            setResult(res.result);
        });
    }, []);

    const downloadImage = async () => {
        chrome.downloads.download({
            url: result.image,
            filename: `${new Date().getTime()}.png`,
        });
    }

    const copyText = () => {
        navigator.clipboard.writeText(
            `Title: ${result.details.title}
URL: ${result.details.url}
Window Size: ${result.details.windowSize}

Browser: ${result.details.browser}
OS: ${result.details.os}
Engine: ${result.details.engine}`
        )
    }

    const capture = async () => {
        setLoading(true);
        const details = await loadDetails();
        const image = await takeScreenshot();
        const result = { details, image };
        chrome.storage.local.set({ result });
        setResult(result);
        setLoading(false);
    }

    const takeScreenshot = (): Promise<string> => {
        return new Promise(res => {
            chrome.tabs.captureVisibleTab(null, { format: 'png' }, (dataURI) => {
                res(dataURI);
            })
        })
    }

    const getTab = async () => {
        const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
        return tabs[0];
    }

    const loadDetails = async () => {
        const tab = await getTab();
        const details: Details = {
            title: tab.title,
            url: tab.url,
            windowSize: `${tab.width} x ${tab.height}`,
            os: `${os.name} - ${os.version}`,
            browser: `${browser.name} - ${browser.version}`,
            engine: `${engine.name} - ${engine.version}`
        };

        return details;
    }

    return (
        <CaptureContext.Provider value={{ capture, loading, result, downloadImage, copyText }}>
            {children}
        </CaptureContext.Provider>
    )
}

export { CaptureContext, CaptureProvider };