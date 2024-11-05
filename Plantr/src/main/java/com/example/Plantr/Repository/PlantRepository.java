package com.example.Plantr.Repository;

import com.example.Plantr.Entity.Plant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlantRepository extends JpaRepository<Plant, Long> {
    //JPA provides basic crud operations so once you set it you're good until the wise ones (Curt and Josh) tell me otherwise
}
