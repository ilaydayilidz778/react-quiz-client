import { Box, Button, Card, CardContent, TextField } from '@mui/material'
import React from 'react'

export default function Login() {
    return (
        <Card sx={{ width: 400 }}>
            <CardContent>
                <Box sx={{
                    '& .MuiTextField-root': {
                        m: 1,
                        width: '90%'
                    }
                }}>
                    <from noValidate autoComplete="off">
                        <TextField
                            label="Email"
                            name="email"
                            variant="outlined" />
                        <TextField
                            label="Name"
                            name="name"
                            variant="outlined" />
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{ width: "90%" }}>Start</Button>
                    </from>
                </Box>
            </CardContent>
        </Card>
    )
}
