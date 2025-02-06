import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importação necessária
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-criar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './criar.component.html',
  styleUrl: './criar.component.scss'
})
export class CriarComponent {
  quantidadeHoras: string = '';
  quantidadeDuracaoExtra: string = '';
  documentoSelecionado: string = 'CPF'; // Ou CNPJ, dependendo do default
  cpf: string = '';
  cnpj: string = '';
  nome: string = '';
  id: string = '';


  formatarHoras(valor: string): string {
    let apenasNumeros = valor.replace(/\D/g, ''); // Remove tudo que não for número

    if (apenasNumeros.length === 0) {
      return ''; // Se não há números, retorna vazio
    }

    // Se o usuário digitou apenas um número
    if (apenasNumeros.length === 1) {
      return apenasNumeros + 'h';
    }

    // Se o usuário digitou dois números, verificamos se está dentro do intervalo 00-23
    let numero = parseInt(apenasNumeros, 10);

    if (numero > 23) {
      numero = 23; // Se for maior que 23, define como 23
    }

    // Mantém o formato correto para "00", "01", ..., "23"
    return numero.toString().padStart(2, '0') + 'h';
  }



  constructor(private cd: ChangeDetectorRef) {}
  
  // atualizarDocumento(tipo: string) {
  //   this.documentoSelecionado = tipo;
  //   this.cd.detectChanges(); // Força a atualização da view
  // }
  

  onSubmit(): void {
    alert('Formulário enviado com sucesso!');
  }

  abaSelecionada: string = 'cliente';

selecionarAba(aba: string): void {
  this.abaSelecionada = aba;
}


  limparCampos(): void {
    this.cpf = '';
    this.cnpj = '';
    this.nome = '';
    this.id = '';
    this.documentoSelecionado = 'CPF';
  }

  indicaFraudeRec: string = 'Regular';
justificativaFraudeRec: string = '';
idBpFraudeRec: string = '';
ajustarDataRec: boolean = false;

indicaFraudeDoad: string = 'Regular';
justificativaFraudeDoad: string = '';
idBpFraudeDoad: string = '';
ajustarDataDoad: boolean = false;

  
}
