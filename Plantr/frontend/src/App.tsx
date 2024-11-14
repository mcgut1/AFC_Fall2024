import {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Nav Pages/Navbar.tsx';
import AboutUs from './components/Nav Pages/AboutUs.tsx';
import Toxicity from './components/Nav Pages/Toxicity.tsx';
import {PlantData} from "./components/PlantData";
import {deletePlant, fetchPlants, savePlant, updatePlant} from "./components/api/PlantClient.ts";
import PlantManager from "./components/PlantManager.tsx";
import PlantCard from "./components/PlantCard.tsx";
import './App.css';
import {Box, Button} from "@mui/material";
import FavoritePlants from "./components/Nav Pages/FavoritePlants.tsx";

function App() {
    const [plants, setPlants] = useState<PlantData[]>([]);
    const [editPlant, setEditPlant] = useState<PlantData | null>(null);
    const [favoritePlants, setFavoritePlants] = useState<PlantData[]>([]);
    const [showPlantManager, setShowPlantManager] = useState(false); // Controls visibility of the PlantManager

    const loadPlants = async () => {
        try {
            const data = await fetchPlants();
            setPlants(data);
        } catch (error) {
            console.error('Error loading plants:', error);
        }
    };

    useEffect(() => {
        loadPlants();
    }, []);

    const handleSavePlant = async (newPlant: PlantData) => {
        try {
            await savePlant(newPlant);
            await loadPlants();
            setShowPlantManager(false); // Hide the form after saving
        } catch (error) {
            console.error('Error saving plant:', error);
        }
    };

    const handleUpdatePlant = async (id: number, updatedPlant: PlantData) => {
        try {
            await updatePlant(id, updatedPlant);
            setEditPlant(null);
            await loadPlants();
        } catch (error) {
            console.error('Error updating plant:', error);
        }
    };

    const handleEditClick = (plant: PlantData) => {
        setEditPlant(plant);
        setShowPlantManager(true); // Show the form when editing
    };

    const handleDeletePlant = async (id: number) => {
        try {
            await deletePlant(id);
            await loadPlants();
        } catch (error) {
            console.error('Error deleting plant:', error);
        }
    };

    const handleAddToFavorites = (plant: PlantData) => {
        if (!favoritePlants.find((favPlant) => favPlant.id === plant.id)) {
            setFavoritePlants([...favoritePlants, plant]);
        }
    };

    const handleRemoveFromFavorites = (id: number) => {
        setFavoritePlants(favoritePlants.filter(plant => plant.id !== id));
    };


    const handleUpdateNotes = (id: number, notes: string) => {
        setPlants(plants.map((plant) => (plant.id === id ? {...plant, notes} : plant)));
    };


    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={
                    <>
                        <Box sx={{textAlign: 'center', mt: 2}}>
                            <h1>Plant Manager</h1>
                        </Box>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                setEditPlant(null); // Reset editing state
                                setShowPlantManager(!showPlantManager); // Toggle form visibility
                            }}
                            sx={{mb: 2}}
                        >
                            {showPlantManager ? 'Close Form' : 'Add Plant'}
                        </Button>

                        {showPlantManager && (
                            <PlantManager
                                initialData={editPlant}
                                onSave={handleSavePlant}
                                onUpdate={handleUpdatePlant}
                            />
                        )}

                        <PlantCard
                            plants={plants}
                            onEdit={handleEditClick}
                            onDelete={handleDeletePlant}
                            onAddToFavorites={handleAddToFavorites}
                            onUpdateNotes={handleUpdateNotes} // Pass the notes handler
                        />
                    </>
                }/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/toxicity" element={<Toxicity/>}/>
                <Route path="/favorites" element={
                    <FavoritePlants
                        plants={favoritePlants}
                        onRemoveFromFavorites={handleRemoveFromFavorites}
                        onEdit={handleEditClick}
                        onUpdate={handleUpdatePlant}
                    />
                }/>
            </Routes>
        </Router>
    );
}

export default App;
