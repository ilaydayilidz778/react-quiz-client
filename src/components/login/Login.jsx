import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material'
import React from 'react'
import Center from '../center/Center/'
import useForm from '../../hooks/useForm';

const getFreshModelObject = () => ({
    name: "",
    email: ""
});

export default function Login() {
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm();

    return (
        <Center>
            <Card sx={{ width: 400 }}>
                <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h3" sx={{ my: 3 }}>Quiz App</Typography>
                    <Box sx={{
                        '& .MuiTextField-root': {
                            m: 1,
                            width: '90%'
                        }
                    }}>
                        <form noValidate autoComplete="off">
                            <TextField
                                label="Email"
                                name="email"
                                value={ }
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
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Center>
    );
}
