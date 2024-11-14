import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { PlantData } from './PlantData.tsx';

interface PlantFormProps {
    initialData?: PlantData;
    onSave?: (newPlant: PlantData) => void;
    onUpdate?: (id: number, updatedPlant: PlantData) => void;
}

const PlantManager = ({ initialData, onSave, onUpdate }: PlantFormProps) => {
    // Set up form data state to track the values in each form field
    const [formData, setFormData] = useState<PlantData>({
        common_name: '',
        image: '',
        sowing: '',
        row_spacing: '',
        minimum_root_depth: '',
        days_toHarvest: '',
        light: 0,
        growth_rate: '',
    });

    // Populate form data if initialData is provided, useful when editing a plant
    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    // Update formData state on each input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'light' ? parseInt(value) : value, // Parse 'light' as an integer
        });
    };

    // Submit handler to determine whether to create or update a plant
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (initialData && onUpdate) {
            // If initialData exists, trigger update with plant ID
            onUpdate(initialData.id!, formData);
        } else if (onSave) {
            // Otherwise, trigger save for new plant
            onSave(formData);
        }
        // Reset form fields to default values after submission
        setFormData({
            common_name: '',
            image: '',
            sowing: '',
            row_spacing: '',
            minimum_root_depth: '',
            days_toHarvest: '',
            light: 0,
            growth_rate: '',
        });
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                <TextField
                    label="Common Name"
                    name="common_name"
                    value={formData.common_name}
                    onChange={handleChange}
                    required
                    sx={{ backgroundColor: 'white' }} // White background for input fields
                />
                <TextField
                    label="Image URL"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    sx={{ backgroundColor: 'white' }}
                />
                <TextField
                    label="Sowing"
                    name="sowing"
                    value={formData.sowing}
                    onChange={handleChange}
                    sx={{ backgroundColor: 'white', width: 150 }}
                />
                <TextField
                    label="Row Spacing"
                    name="row_spacing"
                    value={formData.row_spacing}
                    onChange={handleChange}
                    sx={{ backgroundColor: 'white', width: 150 }}
                />
                <TextField
                    label="Minimum Root Depth"
                    name="minimum_root_depth"
                    value={formData.minimum_root_depth}
                    onChange={handleChange}
                    sx={{ backgroundColor: 'white', width: 150 }}
                />
                <TextField
                    label="Days to Harvest"
                    name="days_toHarvest"
                    value={formData.days_toHarvest}
                    onChange={handleChange}
                    sx={{ backgroundColor: 'white', width: 150 }}
                />
                <TextField
                    label="Light Requirement (hours)"
                    name="light"
                    type="number"
                    value={formData.light}
                    onChange={handleChange}
                    sx={{ backgroundColor: 'white', width: 150 }}
                />
                <TextField
                    label="Growth Rate"
                    name="growth_rate"
                    value={formData.growth_rate}
                    onChange={handleChange}
                    sx={{ backgroundColor: 'white', width: 150 }}
                />
            </Box>
            <Button
                type="submit"
                variant="contained"
                sx={{
                    margin: 4,
                    bgcolor: '#4CAF50', // Green background
                    color: 'white', // White text
                    '&:hover': { bgcolor: '#388E3C' } // Darker green on hover
                }}
            >
                Submit
            </Button>
        </Box>
    );
};

export default PlantManager;
