import { Button, Grid, Icon, SxProps, Theme } from "@mui/material";
import * as React from "react";
import { FCC } from "../models";
import { CaptureContext } from "../providers/capture.provider"

const CustomButton: FCC<{
    loading: boolean,
    onClick: () => void,
    sx?: SxProps<Theme>
}> = ({ onClick, loading, sx = {}, children }) => {

    const [clicked, setClicked] = React.useState(false);

    const click = () => {
        setClicked(true);
        onClick();
        setTimeout(() => {
            setClicked(false);
        }, 500);
    }

    return <Button sx={sx} disabled={loading || clicked} onClick={click} size='small' variant='contained'>
        {clicked ? <Icon>check</Icon> : children}
    </Button>

}

const Actions = () => {
    const { capture, loading, result, downloadImage, copyText } = React.useContext(CaptureContext);

    return (
        <Grid container spacing={1} sx={{
            '& .MuiGrid-item': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch'
            }
        }}>
            {result && (
                <>
                    <Grid item>
                        <CustomButton sx={{ px: 0 }} loading={loading} onClick={copyText}><Icon>content_copy</Icon></CustomButton>
                    </Grid>
                    <Grid item>
                        <CustomButton sx={{ px: 0 }} loading={loading} onClick={downloadImage}><Icon>download</Icon></CustomButton>
                    </Grid>
                </>
            )}
            <Grid item flex={1}>
                <CustomButton sx={{ px: 0 }} loading={loading} onClick={capture}>Capture</CustomButton>
            </Grid>
        </Grid>
    )
}

export default Actions