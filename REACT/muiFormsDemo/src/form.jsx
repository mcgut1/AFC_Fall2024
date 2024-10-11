import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'; // Import Yup

export default function Form() {
   
    const personSchema = Yup.object({
        first_name: Yup.string()
            .required("Must have a first name")
            .min(2, "First name must be at least 2 characters"),

            
    });

    
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        resolver: yupResolver(personSchema),
    });

  
    const handleChange = (e) => {
        setValue(e.target.name, e.target.value);  // Set form value
        console.log(watch("first_name"));         // Log the value of "first_name" field
    };

    
    const onSubmit = (data) => {
        console.log(data); // Log the form data on submit
        let JSONData = JSON.stringify(data)
        let options = {
            method: "POST",
            body: JSONData
        }
        axios.request(options)
        .then()
        .catch()
        console.log(JSONData)
        reset();
        } 
    };

    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)} // Handles form submission
        >
            <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                {...register("first_name")}   // Register the field with react-hook-form
                onChange={handleChange}       // Handle changes with custom function
                helperText={errors.first_name ? errors.first_name.message : ""}
                error={errors.first_name !== undefined} // Show error state if validation fails
            />

            <Stack direction="row" spacing={2}>
                <Button onClick={()=> reset()} variant="contained" color="contained" color="error">
                    Submit
                </Button>
            </Stack>
        </Box>
    );
}
