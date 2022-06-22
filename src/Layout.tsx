import * as React from 'react';
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { Box, CssBaseline } from '@mui/material';
import { FCC } from './models';
import { CaptureProvider } from './providers/capture.provider';

const Layout: FCC = ({ children }) => {
    return <ThemeProvider theme={theme}>
        <CaptureProvider>
            <CssBaseline />
            <Box sx={{ minWidth: '500px', p: 2 }}>
                {children}
            </Box>
        </CaptureProvider>
    </ThemeProvider>
}

export default Layout;