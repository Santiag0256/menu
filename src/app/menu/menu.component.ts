import { Component, ViewChild } from '@angular/core';
import { VentanaComponent } from '../ventana/ventana.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  // Acceso al componente VentanaComponent
  @ViewChild(VentanaComponent) ventanaComponent!: VentanaComponent;

  abrirModal() {
    this.ventanaComponent.abrirModal(); // Llama al método abrirModal de VentanaComponent
  }
}
