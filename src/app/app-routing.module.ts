import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Asegúrate de importar RouterModule
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { CocineroComponent } from './cocinero/cocinero.component';
 // Importa tu componente de confirmación de pedido

const routes: Routes = [
  { path: 'menu', component:MenuComponent }, 
  { path: 'lista-comida', component:CocineroComponent},
  {path:'',redirectTo:'/menu', pathMatch:"full"},
  // Define tu ruta
  // Otras rutas si las tienes...
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) // Asegúrate de importar el RouterModule con tus rutas
  ],
  exports: [RouterModule] // Exporta RouterModule para usar en otros módulos
})
export class AppRoutingModule { }
