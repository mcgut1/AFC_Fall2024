package com.example.Plantr.Controller;

import com.example.Plantr.Entity.Plant;
import com.example.Plantr.Service.PlantService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/plants")

public class PlantController {
    private final PlantService plantService;


    //CREATE
    @PostMapping
    public ResponseEntity<Plant> createPlant(@RequestBody Plant plant) {
        Plant newPlant = plantService.createPlant(plant);
        return new ResponseEntity<>(newPlant, HttpStatus.CREATED);
    }

    //READ
    @GetMapping
    public ResponseEntity<List<Plant>> getAllPlantsPlants() {
        List<Plant> plants = plantService.getAllPlants();
        return new ResponseEntity<>(plants, HttpStatus.OK);

    }

    //UPDATE
    @PutMapping("/{id}")
    public ResponseEntity<Plant> updatePlant(@PathVariable Long id, @RequestBody Plant updatedPlant) {
        Plant plant = plantService.updatePlantById(id, updatedPlant);
        if (plant == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(plant, HttpStatus.OK);
    }

    //DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlant(@PathVariable Long id) {
        boolean deleted = plantService.deletePlantById(id);
        if (deleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}