import { Injectable } from '@angular/core';
import { Equipo } from './menu'; // Asegúrate de que esta ruta sea correcta
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private urlBase = "http://localhost:8080/api-coordinador/coordinador";

  constructor(private clienteHttp: HttpClient) {}
  obtenerEquipos(): Observable<Equipo[]> {
    return this.clienteHttp.get<Equipo[]>(this.urlBase);
  }
  
  agregarEquipo(equipo: Equipo): Observable<Object> {
    return this.clienteHttp.post(this.urlBase, equipo);
  }
  
  eliminarEquipo(id: number): Observable<Object> {
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
  
  



  private modalOpen = new Subject<boolean>();
  modalOpen$ = this.modalOpen.asObservable();

  abrirModal() {
    this.modalOpen.next(true);
  }

  cerrarModal() {
    this.modalOpen.next(false);
  }
}
