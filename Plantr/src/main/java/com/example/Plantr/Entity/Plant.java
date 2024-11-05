package com.example.Plantr.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Plant")
public class Plant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String common_name;

    private String image;

    private String sowing;

    private String row_spacing;

    private String minimum_root_depth;

    private String days_toHarvest;

    private Integer light;

    private String growth_rate;


}

