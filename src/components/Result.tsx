import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';
import { Result } from '../models';

const Result: React.FC<Result> = ({ details, image }) => {

    return <Grid container sx={{ mb: 2 }}>
        <Grid item xs={8}>
            <Typography>
                <b>Title:</b> {details.title}<br />
                <b>URL:</b> {details.url}<br />
                <b>Window Size:</b> {details.windowSize}<br />
                <br />
                <b>Browser:</b> {details.browser}<br />
                <b>OS:</b> {details.os}<br />
                <b>Engine:</b> {details.engine}<br />
            </Typography>
        </Grid>
        <Grid item xs={4} sx={{
            '& img': {
                maxWidth: '100%'
            }
        }}>
            <img src={image} />
        </Grid>
    </Grid>
}

export default Result;