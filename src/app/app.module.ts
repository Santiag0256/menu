import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { VentanaComponent } from './ventana/ventana.component';
import { FormsModule } from '@angular/forms';
import { CocineroComponent } from './cocinero/cocinero.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    VentanaComponent,
    CocineroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
