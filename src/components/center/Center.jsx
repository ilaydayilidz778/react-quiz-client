import { Grid } from '@mui/material'
import React from 'react'

export default function Center() {
    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
        >
            <Grid item xs={1}>
            </Grid>
        </Grid>
    )
}
