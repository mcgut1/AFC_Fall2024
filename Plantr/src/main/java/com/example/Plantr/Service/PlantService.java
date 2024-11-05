package com.example.Plantr.Service;

import com.example.Plantr.Entity.Plant;
import com.example.Plantr.Repository.PlantRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@AllArgsConstructor
@Service
public class PlantService {

    private final PlantRepository plantRepository;

    // Create a new plant
    public Plant createPlant(Plant plantEntity) {
        return plantRepository.save(plantEntity);
    }

    //  Get ALL plants
    public List<Plant> getAllPlants() {
        return plantRepository.findAll();
    }

    //  Get a plant by ID
    public Plant getPlantById(Long id) {
        return plantRepository.findById(id).orElse(null);
    }

    // Update a plant by its ID
    public Plant updatePlantById(Long id, Plant plantEntity) {
        return plantRepository.findById(id)
                .map(existingPlant -> {
                    existingPlant.setCommon_name(plantEntity.getCommon_name());
                    existingPlant.setImage(plantEntity.getImage());
                    existingPlant.setSowing(plantEntity.getSowing());
                    existingPlant.setRow_spacing(plantEntity.getRow_spacing());
                    existingPlant.setMinimum_root_depth(plantEntity.getMinimum_root_depth());
                    existingPlant.setDays_toHarvest(plantEntity.getDays_toHarvest());
                    existingPlant.setLight(plantEntity.getLight());
                    existingPlant.setGrowth_rate(plantEntity.getGrowth_rate());
                    return plantRepository.save(existingPlant); // Save updated plant
                })
                .orElse(null); //
    }

    // Delete a plant by id
    public boolean deletePlantById(Long id) {
        if (plantRepository.existsById(id)) {
            plantRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
