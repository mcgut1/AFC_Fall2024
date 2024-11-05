import axios from 'axios';
import { PlantData } from '../components/PlantData';


const TREFLE_API_URL = 'https://trefle.io/api/v1';
const TREFLE_API_HEADERS = {
    Authorization: `Bearer ${process.env.REACT_APP_TREFLE_API_TOKEN}`,
};

//Trefle Map
const transformTreflePlant = (treflePlant: any): PlantData => ({
    id: treflePlant.id,
    common_name: treflePlant.common_name,
    image: treflePlant.image_url, // Assuming `image_url` exists in Trefle API
    sowing: treflePlant.sowing || '', // Map or leave as empty string if missing
    row_spacing: treflePlant.row_spacing || '',
    minimum_root_depth: treflePlant.minimum_root_depth || '',
    days_toHarvest: treflePlant.days_to_harvest || '',
    light: treflePlant.light || 0,
    growth_rate: treflePlant.growth_rate || '',
});

// Fetch a list of plants from Trefle and map them to your schema
export const searchTreflePlants = async (query: string): Promise<PlantData[]> => {
    try {
        const response = await axios.get(`${TREFLE_API_URL}/plants/search`, {
            headers: __  TREFLE_API_HEADERS,
            params: { q: query },
        });
        const treflePlants = response.data.data; // Adjust based on Trefle's response

        // Map Trefle plants to your database schema
        return treflePlants.map(transformTreflePlant);
    } catch (error) {
        console.error('Error fetching plants from Trefle:', error);
        throw error;
    }
};

// Fetch a single plant by ID from Trefle and map to your schema
export const fetchTreflePlantById = async (id: number): Promise<PlantData> => {
    try {
        const response = await axios.get(`${TREFLE_API_URL}/plants/${id}`, {
            headers: TREFLE_API_HEADERS,
        });
        const treflePlant = response.data.data; // Adjust based on Trefle's response

        return transformTreflePlant(treflePlant);
    } catch (error) {
        console.error(`Error fetching Trefle plant with ID ${id}:`, error);
        throw error;
    }
};
