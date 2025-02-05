import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-criar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './criar.component.html',
  styleUrl: './criar.component.scss'
})
export class CriarComponent implements OnInit {
  dataMaxima: string = '';
  quantidadeHoras: string = ''; // Armazena o valor formatado ("02h", "48h")

  ngOnInit() {
    // Define a data máxima para hoje
    const hoje = new Date().toISOString().split("T")[0];
    this.dataMaxima = hoje;
  }

  formatarHoras() {
    if (!this.quantidadeHoras) {
      return;
    }
  
    // Remove qualquer caractere não numérico
    let horas = this.quantidadeHoras.replace(/\D/g, '');
  
    // Se o usuário estiver apagando (removendo o último número), não forçar a reinserção do "h"
    if (this.quantidadeHoras.endsWith('h') && this.quantidadeHoras.length > horas.length + 1) {
      this.quantidadeHoras = horas;
      return;
    }
  
    // Limita a dois caracteres numéricos
    horas = horas.substring(0, 2);
  
    // Se houver algum número, adiciona "h" no final, senão deixa vazio
    this.quantidadeHoras = horas ? horas + 'h' : '';
  }
  
  
  
}