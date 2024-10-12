package com.api.entidades;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@ToString
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Coordinador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 50, nullable = false)
    private Long mesa;
    @Column(length = 50, nullable = false)
    private BigDecimal precio;

    @Column(nullable = false, unique = true)

    private String comida;








}