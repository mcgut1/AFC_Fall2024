import React, { useState } from 'react';
import { searchTreflePlants } from '../api/TrefleClient';
import { Button, TextField, List, ListItem, ListItemText } from '@mui/material';

class TrefleSearch extends React.Component<{ onSelectPlant: any }> {
    render() {
        let {onSelectPlant: onSelectPlant} = this.props;
        const [query, setQuery] = useState('');
        const [plants, setPlants] = useState([]);

        const handleSearch = async () => {
            try {
                const results = await searchTreflePlants(query);
                setPlants(results);
            } catch (error) {
                console.error('Error fetching plants:', error);
            }
        };

        return (
            <div>
                <TextField
                    label="Search Plants"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Button variant="contained" onClick={handleSearch}>
                    Search
                </Button>
                <List>
                    {plants.map((plant) => (
                        <ListItem key={plant.id} button onClick={() => onSelectPlant(plant)}>
                            <ListItemText primary={plant.common_name}/>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}

export default TrefleSearch;
