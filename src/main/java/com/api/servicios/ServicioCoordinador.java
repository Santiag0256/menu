package com.api.servicios;

import com.api.entidades.Coordinador;
import com.api.repositorios.IRepositorioCoordinador;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicioCoordinador implements IServicioCoordinador {

    @Autowired
    private IRepositorioCoordinador iRepositorioCoordinador;


    @Override
    public List<Coordinador> listaCoordinadores() {
        return this.iRepositorioCoordinador.findAll();
    }

    @Override
    public Coordinador buscarCoordinadorPorId(Long id) {
        return this.iRepositorioCoordinador.findById(id).orElse(null);
    }

    @Override
    public Coordinador guardarCoordinador(Coordinador coordinador) {
       return this.iRepositorioCoordinador.save(coordinador);
    }

    @Override
    public void eliminarCoordinador(Long id) {
        this.iRepositorioCoordinador.deleteById(id);
    }
}
