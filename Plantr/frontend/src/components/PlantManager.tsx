import React, { useState, useEffect } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { PlantData } from './PlantData.tsx';

interface PlantFormProps {
    initialData?: PlantData;
    onSave?: (newPlant: PlantData) => void;
    onUpdate?: (id: number, updatedPlant: PlantData) => void;
}

const PlantManager: React.FC<PlantFormProps> = ({ initialData, onSave, onUpdate }) => {
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

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'light' ? parseInt(value) : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (initialData && onUpdate) {
            onUpdate(initialData.id!, formData);
        } else if (onSave) {
            onSave(formData);
        }
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
                <TextField label="Common Name"
                           name="common_name"
                           value={formData.common_name}
                           onChange={handleChange}
                           required

                           sx={{ backgroundColor: 'white'}} //white background for input fields so it doesn't look like trash
                />
                <TextField label="Image URL"
                           name="image"
                           value={formData.image}
                           onChange={handleChange}
                           sx={{ backgroundColor: 'white' }}
                />

                <TextField label="Sowing"
                           name="sowing"
                           value={formData.sowing}
                           onChange={handleChange}
                           sx={{ backgroundColor: 'white', width: 150 }}
                />
                <TextField label="Row Spacing"
                           name="row_spacing"
                           value={formData.row_spacing}
                           onChange={handleChange}
                           sx={{ backgroundColor: 'white', width: 150 }}
                />
                <TextField label="Minimum Root Depth"
                           name="minimum_root_depth"
                           value={formData.minimum_root_depth}
                           onChange={handleChange}
                           sx={{ backgroundColor: 'white', width: 150 }}
                />
                <TextField label="Days to Harvest"
                           name="days_toHarvest"
                           value={formData.days_toHarvest}
                           onChange={handleChange}
                           sx={{ backgroundColor: 'white', width: 150 }}
                />
                <TextField label="Light Requirement (hours)"
                           name="light"
                           type="number"
                           value={formData.light}
                           onChange={handleChange}
                           sx={{ backgroundColor: 'white', width: 150 }}
                />
                <TextField label="Growth Rate"
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
                    bgcolor: '#4CAF50',     // Green background color
                    color: 'white',          // White text color
                    '&:hover': { bgcolor: '#388E3C' } // Darker green on hover
                }}
            >
                Submit
            </Button>
        </Box>
    );
};

export default PlantManager;