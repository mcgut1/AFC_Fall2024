import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box } from '@mui/material';
import { PlantData } from './PlantData.tsx';
import defaultImage from './assets/defaultImage.jpeg';

interface PlantListProps {
    plants: PlantData[];
    onEdit: (plant: PlantData) => void;
    onDelete: (id: number) => void;
    onAddToFavorites?: (plant: PlantData) => void;
    isFavoritePage?: boolean;
}

const PlantCard: React.FC<PlantListProps> = ({ plants, onDelete, onEdit, onAddToFavorites, isFavoritePage }) => (
    <Grid container spacing={3}>
        {plants.map((plant) => (
            <Grid item xs={12} sm={4} md={2} key={plant.id}>
                <Card sx={{ width: 225 }}>
                    <CardMedia
                        component="img"
                        height="200"
                        width="100"
                        image={plant.image || defaultImage}
                        alt={plant.common_name || "Default plant image"}
                        style={{ objectFit: 'cover' }}
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

                        <Box sx={{ display: 'center', gap: 1, mt: 5 }}>
                            <Button
                                size="small"
                                variant="contained"
                                color="primary"
                                onClick={() => onEdit(plant)}
                            >
                                Edit
                            </Button>

                            <Button
                                size="small"
                                variant="contained"
                                color="error"
                                onClick={() => onDelete(plant.id)}
                            >
                                {isFavoritePage ? 'Remove from Favorites' : 'Delete'}
                            </Button>

                            {!isFavoritePage && onAddToFavorites && (
                                <Button
                                    size="small"
                                    variant="contained"
                                    color="success"
                                    onClick={() => onAddToFavorites(plant)}
                                >
                                    Add To Favorites
                                </Button>

                            )}
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        ))}
    </Grid>
);

export default PlantCard;
