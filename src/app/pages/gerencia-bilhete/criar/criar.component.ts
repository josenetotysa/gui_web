import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importação necessária
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-criar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './criar.component.html',
  styleUrl: './criar.component.scss'
})
/**
 * Componente responsável pela criação de novos registros no sistema.
 */
export class CriarComponent {
  /**
   * Quantidade de horas informada pelo usuário.
   */
  quantidadeHoras: string = '';

  /**
   * Duração extra informada pelo usuário.
   */
  quantidadeDuracaoExtra: string = '';

  /**
   * Tipo de documento selecionado pelo usuário. Pode ser 'CPF' ou 'CNPJ'.
   */
  documentoSelecionado: string = 'CPF';

  /**
   * Aba atualmente selecionada no formulário.
   */
  abaSelecionada: string = 'cliente';

  /**
   * Status da indicação de fraude para o receptor.
   */
  indicaFraudeRec: string = 'Regular';

  /**
   * Justificativa da fraude no receptor.
   */
  justificativaFraudeRec: string = '';

  /**
   * Identificador do BP do receptor relacionado à fraude.
   */
  idBpFraudeRec: string = '';

  /**
   * Indica se a data do receptor deve ser ajustada.
   */
  ajustarDataRec: boolean = false;

  /**
   * Status da indicação de fraude para o doador.
   */
  indicaFraudeDoad: string = 'Regular';

  /**
   * Justificativa da fraude no doador.
   */
  justificativaFraudeDoad: string = '';

  /**
   * Identificador do BP do doador relacionado à fraude.
   */
  idBpFraudeDoad: string = '';

  /**
   * Indica se a data do doador deve ser ajustada.
   */
  ajustarDataDoad: boolean = false;

  /**
   * Formata um valor de horas inserido pelo usuário.
   * 
   * @param {string} valor - O valor digitado pelo usuário.
   * @returns {string} - O valor formatado no padrão 'hh'.
   */
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

  /**
   * Define a aba selecionada no formulário.
   * 
   * @param {string} aba - Nome da aba a ser ativada.
   */
  selecionarAba(aba: string): void {
    this.abaSelecionada = aba;
  }

  /**
   * Envia os dados do formulário.
   */
  onSubmit(): void {
    alert('Formulário enviado com sucesso!');
  }

  /**
   * Limpa todos os formulários da tela e redefine as variáveis do componente.
   */
  limparTodosFormularios(): void {
    const formularios = document.querySelectorAll('form');

    formularios.forEach(form => {
      (form as HTMLFormElement).reset();
    });

    // Reseta variáveis do componente
    this.documentoSelecionado = 'CPF';
    this.abaSelecionada = 'cliente';

    // Resetando valores relacionados ao formulário no TypeScript
    this.indicaFraudeRec = 'Regular';
    this.justificativaFraudeRec = '';
    this.idBpFraudeRec = '';
    this.ajustarDataRec = false;
    this.indicaFraudeDoad = 'Regular';
    this.justificativaFraudeDoad = '';
    this.idBpFraudeDoad = '';
    this.ajustarDataDoad = false;

    console.log('Todos os formulários foram limpos.');
  }
}
