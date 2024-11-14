import axios from "axios";
import {PlantData} from "../PlantData.tsx";

const API_BASE_URL = 'http://localhost:8080/api/plants';

// CREATE: Save a new plant
export const savePlant = async (plantData: PlantData) => {
    try {
        const response = await axios.post(API_BASE_URL, plantData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error saving selected plant:', error);
        throw error;
    }
};

// READ: Get all plants
export const fetchPlants = async () => {
    try {
        const response = await axios.get<PlantData[]>(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching plants:', error);
        throw error;
    }
};

// READ: Get a single plant by ID
export const fetchPlantById = async (id: number) => {
    try {
        const response = await axios.get<PlantData>(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching plant with ID ${id}:`, error);
        throw error;
    }
};

// UPDATE: Update a plant by ID
export const updatePlant = async (id: number, updatedPlant: PlantData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/${id}`, updatedPlant, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error updating plant with ID ${id}:`, error);
        throw error;
    }
};

// DELETE: Delete a plant by ID
export const deletePlant = async (id: number) => {
    try {
        await axios.delete(`${API_BASE_URL}/${id}`);
    } catch (error) {
        console.error(`Error deleting plant with ID ${id}:`, error);
        throw error;
    }
};
