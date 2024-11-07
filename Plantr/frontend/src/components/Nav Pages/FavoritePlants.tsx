import React, { useState } from 'react';
import PlantCard from '../PlantCard'; // Adjust the path if needed
import PlantManager from '../PlantManager';
import { PlantData } from '../PlantData';

interface FavoritePlantsProps {
    plants: PlantData[];
    onRemoveFromFavorites: (id: number) => void;
    onEdit: (plant: PlantData) => void;
    onUpdate: (id: number, updatedPlant: PlantData) => void;
}

const FavoritePlants: React.FC<FavoritePlantsProps> = ({ plants, onRemoveFromFavorites, onEdit, onUpdate }) => {
    const [editPlant, setEditPlant] = useState<PlantData | null>(null); // Track plant to edit

    // Handle click to edit plant and open the form
    const handleEditClick = (plant: PlantData) => {
        setEditPlant(plant);
    };

    // Close the form after saving or canceling
    const handleSavePlant = (updatedPlant: PlantData) => {
        onUpdate(updatedPlant.id, updatedPlant);
        setEditPlant(null); // Close edit form
    };

    return (
        <div>
            <h2>Your Favorite Plants</h2>

            {/* Conditionally render PlantManager for editing */}
            {editPlant ? (
                <PlantManager
                    initialData={editPlant}
                    onSave={handleSavePlant}
                    onUpdate={handleSavePlant} // Reuse the same handler for updating
                />
            ) : (
                // Display plant cards when not editing
                <PlantCard
                    plants={plants}
                    onDelete={onRemoveFromFavorites}
                    onEdit={handleEditClick}
                    onAddToFavorites={() => {}} // Leave empty if no "add to favorites" needed here
                />
            )}
        </div>
    );
};

export default FavoritePlants;
