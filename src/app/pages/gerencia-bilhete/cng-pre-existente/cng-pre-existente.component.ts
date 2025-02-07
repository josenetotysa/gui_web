import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { ToastrService } from 'ngx-toastr';

/**
 * Interface que representa os dados do provedor de serviços.
 */
export interface providerData {
  /**
   * Número de telefone associado ao provedor.
   */
  phoneNumber: number | string;

  /**
   * Identificador único do provedor.
   */
  providerId: number;
}

/**
 * Conjunto de dados simulados para a tabela de provedores.
 */
const ELEMENT_DATA: providerData[] = [
  { phoneNumber: 3498887717, providerId: 1 },
  { phoneNumber: 3498887718, providerId: 2 },
  { phoneNumber: 3498887765, providerId: 3 },
  { phoneNumber: 3491234325, providerId: 4 },
];

@Component({
  selector: 'app-cng-pre-existente',
  standalone: true,
  imports: [MatTableModule, NgxMaskDirective, NgxMaskPipe, ReactiveFormsModule],
  templateUrl: './cng-pre-existente.component.html',
  styleUrl: './cng-pre-existente.component.scss'
})
/**
 * Componente responsável por gerenciar a consulta de CNG pré-existente.
 */
export class CngPreExistenteComponent {

  /**
   * Construtor do componente.
   * 
   * @param {ToastrService} toastr - Serviço para exibição de notificações.
   */
  constructor(private toastr: ToastrService) {}

  /**
   * Formulário reativo para filtrar os dados da tabela.
   */
  filterForm = new FormGroup({
    /**
     * Campo CN - Código inicial do número de telefone.
     */
    CN: new FormControl(null, [Validators.required, Validators.minLength(2)]),

    /**
     * Campo Número - Parte intermediária do número de telefone.
     */
    number: new FormControl(null, [Validators.required, Validators.minLength(4)]),

    /**
     * Campo MCDU - Últimos dígitos do número de telefone.
     */
    MCDU: new FormControl(null, [Validators.required, Validators.minLength(4)]),
  });

  /**
   * Colunas exibidas na tabela.
   */
  displayedColumns: string[] = ['phoneNumber', 'providerId'];

  /**
   * Fonte de dados para exibição na tabela.
   */
  dataSource = ELEMENT_DATA;

  /**
   * Controla a exibição do filtro (accordion).
   */
  isFilterOpen = true;

  /**
   * Filtra os dados da tabela com base nos valores inseridos no formulário.
   * Se algum campo estiver inválido, exibe uma mensagem de erro.
   */
  filterTable() {
    this.filterForm.markAllAsTouched();

    if (this.filterForm.invalid) {
      this.toastr.error('É necessário preencher todos os campos para filtrar.', 'Oops...', {
        timeOut: 3000,
      });

      return;
    }

    const data = this.filterForm.getRawValue();
    const phoneNumber = data.CN! + data.number! + data.MCDU!;

    this.dataSource = this.dataSource.filter(element => element.phoneNumber == phoneNumber);
  }

  /**
   * Reseta o formulário e restaura os dados originais da tabela.
   */
  resetFilter() {
    this.filterForm.reset();
    this.dataSource = ELEMENT_DATA;
  }

  /**
   * Alterna a exibição do formulário de filtro (accordion).
   */
  toggleAccordion() {
    this.isFilterOpen = !this.isFilterOpen;
  }
}
