import { FC, ReactElement, ReactNode } from 'react'

export type FCC<T = {}> = FC<T & { children: ReactNode }>

export type Result = {
    image: string;
    details: Details;
}

export type Details = {
    title: string,
    windowSize: string,
    url: string,
    os: string,
    browser: string,
    engine: string,
}