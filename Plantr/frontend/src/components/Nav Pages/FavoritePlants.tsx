import PlantCard from '../PlantCard';
import PlantManager from '../PlantManager';
import { PlantData } from '../PlantData';
import {useState} from "react";

interface FavoritePlantsProps {
    plants: PlantData[];
    onRemoveFromFavorites: (id: number) => void;
    onEdit: (plant: PlantData) => void;
    onUpdate: (id: number, updatedPlant: PlantData) => void;
    onUpdateNotes?: (plant: PlantData) => void;
}

const FavoritePlants = ({ plants, onRemoveFromFavorites, onUpdate, onUpdateNotes }: FavoritePlantsProps) => {
    const [editPlant, setEditPlant] = useState<PlantData | null>(null); // Track plant to edit

    // Handle click to edit plant and open the form
    const handleEditClick = (plant: PlantData) => {
        setEditPlant(plant);
    };

    // Close the form after saving or canceling
    const handleSavePlant = (updatedPlant: PlantData) => {
        if (updatedPlant.id !== undefined) {
            onUpdate(updatedPlant.id, updatedPlant);
        }
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
                    onUpdate={handleSavePlant} // Reuse the same function for updating
                />
            ) : (
                // Display plant cards when not editing
                <PlantCard
                    plants={plants}
                    onDelete={onRemoveFromFavorites}
                    onEdit={handleEditClick}
                    onAddToFavorites={() => {}} // Leave empty if no "add to favorites" needed here
                    onUpdateNotes={onUpdateNotes} // Placeholder for the required prop
                />
            )}
        </div>
    );
};

export default FavoritePlants;
