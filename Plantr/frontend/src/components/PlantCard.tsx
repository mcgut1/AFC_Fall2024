import {useState} from 'react';
import {Box, Button, Card, CardContent, CardMedia, Grid, Modal, TextField, Typography} from '@mui/material';
import {PlantData} from './PlantData';
import defaultImage from './assets/defaultImage.jpeg';

interface PlantListProps {
    plants: PlantData[];
    onEdit: (plant: PlantData) => void;
    onDelete: (id: number) => void;
    onAddToFavorites?: (plant: PlantData) => void;
    isFavoritePage?: boolean;
    onUpdateNotes: (id: number, notes: string) => void; // New prop for updating notes
}

const PlantCard = ({
                       plants,
                       onDelete,
                       onEdit,
                       onAddToFavorites,
                       isFavoritePage,
                       onUpdateNotes
                   }: PlantListProps) => {
    // State to track which plant's notes modal is open
    const [openNotesModal, setOpenNotesModal] = useState<number | null>(null);
    // State to track the content of notes
    const [notes, setNotes] = useState<string>('');

    // Opens the modal for adding or editing notes for a specific plant
    const handleNotesClick = (plantId: number, currentNotes: string) => {
        setOpenNotesModal(plantId); // Set the specific plant’s ID to open the modal
        setNotes(currentNotes); // Load existing notes if any
    };

    // Calls onUpdateNotes to save the notes for the specified plant and closes the modal
    const handleSaveNotes = (plantId: number) => {
        onUpdateNotes(plantId, notes); // Save the notes through onUpdateNotes
        setOpenNotesModal(null); // Close the modal after saving
    };

    return (
        <Grid container spacing={2}>
            {plants.map((plant) => (
                <Grid item xs={10} sm={6} md={3} key={plant.id}>
                    <Card sx={{width: 350}}>
                        <CardMedia
                            component="img"
                            height="200"
                            width="150"
                            image={plant.image || defaultImage} // Show default image if plant image is missing
                            alt={plant.common_name || "Default plant image"}
                            style={{objectFit: 'cover'}}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" align="center">
                                {plant.common_name}
                            </Typography>
                            {/* Plant information display */}
                            <Typography variant="body2" color="text.secondary"><strong>Sowing:</strong> {plant.sowing}
                            </Typography>
                            <Typography variant="body2" color="text.secondary"><strong>Row
                                Spacing:</strong> {plant.row_spacing}</Typography>
                            <Typography variant="body2" color="text.secondary"><strong>Minimum Root
                                Depth:</strong> {plant.minimum_root_depth}</Typography>
                            <Typography variant="body2" color="text.secondary"><strong>Days to
                                Harvest:</strong> {plant.days_toHarvest}</Typography>
                            <Typography variant="body2" color="text.secondary"><strong>Light
                                Requirement:</strong> {plant.light} hours</Typography>
                            <Typography variant="body2" color="text.secondary"><strong>Growth
                                Rate:</strong> {plant.growth_rate}</Typography>

                            {/* Action buttons */}
                            <Box sx={{display: 'flex', gap: 1, mt: 2}}>
                                <Button size="small" variant="contained" color="primary" onClick={() => onEdit(plant)}>
                                    Edit
                                </Button>

                                <Button
                                    size="small"
                                    variant="contained"
                                    color="error"
                                    onClick={() => onDelete(plant.id!)}
                                >
                                    {isFavoritePage ? 'Remove from Favorites' : 'Delete'}
                                </Button>

                                {/* Add to Favorites button, shown only if onAddToFavorites prop is provided */}
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

                                {/* Notes button to open the modal for adding or editing notes */}
                                <Button
                                    size="small"
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => handleNotesClick(plant.id!, plant.notes || '')}
                                >
                                    Notes
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>

                    {/* Modal for notes input */}
                    <Modal
                        open={openNotesModal === plant.id} // Only open for the specific plant
                        onClose={() => setOpenNotesModal(null)} // Close modal when clicking outside
                    >
                        <Box sx={{p: 3, bgcolor: 'background.paper', margin: 'auto', mt: '10%', width: 400}}>
                            <Typography variant="h6" mb={2}>Notes for {plant.common_name}</Typography>
                            <TextField
                                fullWidth
                                multiline
                                rows={4}
                                variant="outlined"
                                label="Notes"
                                value={notes} // Current notes in state
                                onChange={(e) => setNotes(e.target.value)}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{mt: 2}}
                                onClick={() => handleSaveNotes(plant.id!)} // Save notes and close modal
                            >
                                Save Notes
                            </Button>
                        </Box>
                    </Modal>
                </Grid>
            ))}
        </Grid>
    );
};

export default PlantCard;
