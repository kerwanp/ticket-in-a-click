import { useEffect, useState } from "react"
import { IResult, UAParser } from "ua-parser-js"

const useUserAgent = (): IResult => {
    const parser = new UAParser();
    parser.setUA(navigator.userAgent);
    return parser.getResult();
}

export default useUserAgent;