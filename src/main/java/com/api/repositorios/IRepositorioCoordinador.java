package com.api.repositorios;

import com.api.entidades.Coordinador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositorioCoordinador extends JpaRepository<Coordinador, Long> {
}
