import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotaService } from './services/nota.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  servicioDeNotas = inject(NotaService);
  tituloNuevaNota = '';
  contenidoNuevaNota = '';

  ngOnInit() {
    this.servicioDeNotas.cargarNotas();
  }

  guardarNota() {
    if (this.tituloNuevaNota && this.contenidoNuevaNota) {
      const nuevaNota = {
        titulo: this.tituloNuevaNota,
        contenido: this.contenidoNuevaNota
      };

      this.servicioDeNotas.agregarNota(nuevaNota);
      this.tituloNuevaNota = '';
      this.contenidoNuevaNota = '';
    }
  }
}