import { Box, Typography } from "@mui/material";
import * as React from "react";
import { FC } from "react";

const PoweredBy: FC = () => {

    const openSyneki = () => {
        chrome.tabs.create({
            url: 'https://syneki.com/'
        });
    }

    return <Box
        onClick={openSyneki}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            textAlign: 'right',
            cursor: 'pointer',
            '& img': {
                height: '25px',
            }
        }}>
        <Typography sx={{ fontSize: '0.8em' }}>Powered By</Typography>
        <img src='/public/images/logo.svg' />
    </Box>
}

export default PoweredBy;