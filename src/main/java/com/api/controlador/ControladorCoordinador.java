package com.api.controlador;

import com.api.entidades.Coordinador;
import com.api.repositorios.excepciones.ResourseNotFoundException;
import com.api.servicios.ServicioCoordinador;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api-coordinador")
@CrossOrigin(origins = "http://localhost:4200/")
public class ControladorCoordinador {

    public static final Logger logger = LoggerFactory.getLogger(ControladorCoordinador.class);

    @Autowired
    private ServicioCoordinador servicioCoordinador;


    @GetMapping("/coordinador")
    public List<Coordinador> listaCoordinador(){
        List<Coordinador> listaCoordinadores = this.servicioCoordinador.listaCoordinadores();
        logger.info("Lista de coordinadores obtenidos");
        listaCoordinadores.forEach(coordinador -> logger.info(coordinador.toString()));
        return listaCoordinadores;
    }

    @GetMapping("/coordinador/{id}")
    public ResponseEntity<Coordinador> buscarCoordinadorPorId(@PathVariable Long id){
        Coordinador coordinadorEncontrado = this.servicioCoordinador.buscarCoordinadorPorId(id);
        if(coordinadorEncontrado != null){
            return ResponseEntity.ok(coordinadorEncontrado);
        }else{
            throw new ResourseNotFoundException("No se encontró el ID");
        }

    }

    @PostMapping("/coordinador")
    @ResponseStatus(HttpStatus.CREATED)
    public Coordinador guardarCoordinador(@RequestBody Coordinador coordinador){
        logger.info("Coordinador agregado: " + coordinador);
        return this.servicioCoordinador.guardarCoordinador(coordinador);
    }

    @PutMapping("/coordinador/{id}")
    public ResponseEntity<Coordinador> actualizarCoordinador (
            @PathVariable Long id,
            @RequestBody Coordinador coordinador){
            Coordinador coordinadorEncontrado = this.servicioCoordinador.buscarCoordinadorPorId(id);
            if(coordinadorEncontrado != null){

            }else{
                throw new ResourseNotFoundException("Recurso no encontrado:" +id);
            }
            coordinadorEncontrado.setMesa(coordinador.getMesa());
            coordinadorEncontrado.setPrecio(coordinador.getPrecio());
            coordinadorEncontrado.setComida(coordinador.getComida());

            this.servicioCoordinador.guardarCoordinador(coordinadorEncontrado);
            return ResponseEntity.ok(coordinadorEncontrado);

    }

    @DeleteMapping("/coordinador/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public ResponseEntity<Map<String, Boolean>> eliminarCoordinador(@PathVariable Long id){
        Coordinador coordinador = this.servicioCoordinador.buscarCoordinadorPorId(id);
        if(coordinador != null){
            throw new ResourseNotFoundException("Id no encontrado: "+id);
        }
        this.servicioCoordinador.eliminarCoordinador(id);
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("Eliminado", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }
}
