import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchAppBar from './components/Nav Pages/SearchAppBar.tsx';
import Home from './components/Nav Pages/Home.tsx';
import AboutUs from './components/Nav Pages/AboutUs.tsx';
import Toxicity from './components/Nav Pages/Toxicity.tsx';
import { PlantData } from "./components/PlantData";
import { savePlant, fetchPlants, updatePlant, deletePlant } from "./api/PlantClient.ts";
import PlantManager from "./components/PlantManager.tsx";
import PlantCard from "./components/PlantCard.tsx";
import './App.css'
import {Box} from "@mui/material";

function App() {
    const [plants, setPlants] = useState<PlantData[]>([]);
    const [editPlant, setEditPlant] = useState<PlantData | null>(null); // Track the plant being edited

    // Fetch plants from database
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

    // Handle saving a new plant and refreshing the list
    const handleSavePlant = async (newPlant: PlantData) => {
        try {
            await savePlant(newPlant);
            await loadPlants();
        } catch (error) {
            console.error('Error saving plant:', error);
        }
    };

    // Handle updating an existing plant
    const handleUpdatePlant = async (id: number, updatedPlant: PlantData) => {
        try {
            await updatePlant(id, updatedPlant); // Update the plant by ID
            setEditPlant(null); // Clear edit mode after update
            await loadPlants(); // Refresh the list after updating
        } catch (error) {
            console.error('Error updating plant:', error);
        }
    };

    // Handle edit button click
    const handleEditClick = (plant: PlantData) => {
        setEditPlant(plant); // Set the plant to be edited
    };

    // Handle deleting a plant
    const handleDeletePlant = async (id: number) => {
        try {
            await deletePlant(id);
            await loadPlants();
        } catch (error) {
            console.error('Error deleting plant:', error);
        }
    };

    return (
        <Router>
            <SearchAppBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/toxicity" element={<Toxicity />} />
            </Routes>
            <Box sx={{ textAlign: 'center', mt: 2 }}> {/* Center and add margin-top */}
                <h1>Plant Manager</h1>
            </Box>
            <PlantManager
                initialData={editPlant} // Pass the plant data to edit
                onSave={handleSavePlant}
                onUpdate={handleUpdatePlant} // Pass update function to PlantManager
            />
            <PlantCard
                plants={plants}
                onEdit={handleEditClick} // Renamed to clarify editing purpose
                onDelete={handleDeletePlant}
            />
        </Router>
    );
}

export default App;
