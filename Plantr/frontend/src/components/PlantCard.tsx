import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';
import { PlantData } from './PlantData.tsx';
import defaultImage from './assets/defaultImage.jpeg'

interface PlantListProps {
    plants: PlantData[];
    onEdit: (plant: PlantData) => void;
    onDelete: (id: number) => void;
}

const PlantCard: React.FC<PlantListProps> = ({ plants, onDelete, onEdit }) => (
    <Grid container spacing={3}>
        {plants.map((plant) => (
            <Grid item xs={12} sm={6} md={4} key={plant.id}>
                <Card sx={{ width: 250}}>
                    <CardMedia
                        component="img"
                        height="200"
                        width="100"
                        image={plant.image || defaultImage}
                        alt={plant.common_name || "Default plant image"}
                        style={{ objectFit: 'contain' }}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {plant.common_name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Sowing:</strong> {plant.sowing}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Row Spacing:</strong> {plant.row_spacing}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Minimum Root Depth:</strong> {plant.minimum_root_depth}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Days to Harvest:</strong> {plant.days_toHarvest}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Light Requirement:</strong> {plant.light} hours
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Growth Rate:</strong> {plant.growth_rate}
                        </Typography>

                        {/* Edit and Delete Button */}
                        <Button
                            size="small"
                            color="primary"
                            onClick={() => onEdit(plant)} // Calls onEdit with plant data for editing
                        >
                            Edit
                        </Button>

                        <Button
                            size="small"
                            color="secondary"
                            onClick={() => onDelete(plant.id)}
                        >
                            Delete
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        ))}
    </Grid>
);

export default PlantCard;
