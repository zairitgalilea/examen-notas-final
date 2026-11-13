import { Injectable, inject, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Nota {
  _id?: string; 
  titulo: string;
  contenido: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotaService {
  private http = inject(HttpClient);
  notas: WritableSignal<Nota[]> = signal([]);
  private apiUrl = 'http://localhost:3000/api/notas';

  cargarNotas() {
    this.http.get<Nota[]>(this.apiUrl).subscribe(notasDeBaseDeDatos => {
      this.notas.set(notasDeBaseDeDatos);
    });
  }

  agregarNota(nuevaNota: Nota) {
    this.http.post<Nota>(this.apiUrl, nuevaNota).subscribe(notaGuardada => {
      this.notas.update(notasActuales => [...notasActuales, notaGuardada]);
    });
  }
}