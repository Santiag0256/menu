import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'; // Importar AOS

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { // Implementar OnInit
  title = 'hamburgo';

  ngOnInit() {
    AOS.init(); // Inicializa AOS
  }
}
