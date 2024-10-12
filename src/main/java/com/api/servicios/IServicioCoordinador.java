package com.api.servicios;

import com.api.entidades.Coordinador;

import java.util.List;

public interface IServicioCoordinador {

    List<Coordinador> listaCoordinadores();

    Coordinador buscarCoordinadorPorId(Long id);

    Coordinador guardarCoordinador(Coordinador coordinador);

    void eliminarCoordinador(Long id);
}
