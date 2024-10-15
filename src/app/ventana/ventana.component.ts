import { Component, OnInit } from '@angular/core';
import { VentaService } from '../venta.service'; // Asegúrate de que esta ruta sea correcta
import { Equipo } from '../menu'; // Modelo de equipo
import { Router } from '@angular/router'; // Importar para navegación si es necesario

@Component({
  selector: 'app-ventana',
  templateUrl: './ventana.component.html',
  styleUrls: ['./ventana.component.css']
})
export class VentanaComponent implements OnInit {
  equipo: Equipo = new Equipo(); // Objeto equipo inicializado
  equipos: Equipo[] = []; // Array de equipos para almacenar la lista
  modalVisible: boolean = false; // Control de visibilidad del modal

  constructor(
    private ventaService: VentaService, // Servicio de ventas
    private enrutador: Router // Servicio de enrutamiento
  ) {}

  ngOnInit() {
    this.obtenerEquipos(); // Cargar equipos al inicio
  }

  // Método que se llama cuando se envía el formulario
  onSubmit() {
    this.guardarEquipo();
  }

  // Método para guardar el equipo
  private guardarEquipo() {
    this.ventaService.agregarEquipo(this.equipo).subscribe({
      next: (datos) => {
        console.log('Equipo guardado:', datos);
        this.irListaEquipos(); // Navegar a la lista de equipos tras guardar
      },
      error: (error: any) => {
        console.error('Error al guardar equipo:', error);
      }
    });
  }

  // Obtener todos los equipos desde el servicio
  private obtenerEquipos() {
    this.ventaService.obtenerEquipos().subscribe((datos) => {
      this.equipos = datos;
    });
  }

  // Método para abrir el modal
  abrirModal() {
    this.modalVisible = true;
    console.log('Modal abierto');
  }

  // Navegar a la lista de equipos
  irListaEquipos() {
    this.enrutador.navigate(['/equipos']); // Ruta para mostrar lista de equipos
  }

  // Método para cerrar el modal
  cerrarModal() {
    this.modalVisible = false;
    console.log('Modal cerrado');
  }
}
