import { Box, Button, Grid } from '@mui/material';
import * as React from 'react';
import Actions from './components/Actions';
import PoweredBy from './components/PoweredBy';
import Result from './components/Result';
import { CaptureContext } from './providers/capture.provider';

const App: React.FC = () => {
    const { loading, result, capture } = React.useContext(CaptureContext);

    return (
        <>
            {!loading && result && <Result {...result} />}
            <Grid container spacing={2} alignItems='center'>
                <Grid item xs={9}>
                    <Actions />
                </Grid>
                <Grid item xs={3}>
                    <PoweredBy />
                </Grid>
            </Grid>
        </>
    )
}

export default App;