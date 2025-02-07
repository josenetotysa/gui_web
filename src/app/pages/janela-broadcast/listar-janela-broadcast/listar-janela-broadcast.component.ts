import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

/**
 * Interface que representa os dados de uma transmissão bloqueada.
 */
export interface blockedBroadcastData {
  /**
   * Data da transmissão bloqueada.
   */
  date: Date;

  /**
   * Dia da semana correspondente à data.
   */
  dayWeek: string;

  /**
   * Ações disponíveis para a transmissão bloqueada.
   */
  actions: string;
}

/**
 * Função que gera dados mockados para a tabela de transmissões bloqueadas.
 * 
 * @param {string[]} dates - Lista de datas em formato de string.
 * @returns {blockedBroadcastData[]} - Array de objetos `blockedBroadcastData` contendo as datas convertidas e seus dias da semana.
 */
const generateMockData = (dates: string[]): blockedBroadcastData[] => {
  return dates.map(dateStr => {
    const date = new Date(Date.parse(dateStr));
    return {
      date,
      dayWeek: date.toLocaleDateString('pt-BR', { weekday: 'long' }),
      actions: ''
    };
  });
};

/**
 * Lista de datas de transmissões bloqueadas.
 */
const dateList = [
  '2025-02-05',
  '2024-05-29',
  '2024-04-11',
  '2023-02-27',
  '2023-01-06',
  '2022-08-30',
  '2021-07-13'
];

/**
 * Conjunto de dados gerados a partir da lista de datas.
 */
const ELEMENT_DATA: blockedBroadcastData[] = generateMockData(dateList);

@Component({
  selector: 'app-listar-janela-broadcast',
  standalone: true,
  imports: [MatTableModule, NgxMaskDirective, NgxMaskPipe, DatePipe],
  templateUrl: './listar-janela-broadcast.component.html',
  styleUrl: './listar-janela-broadcast.component.scss'
})
/**
 * Componente responsável por listar as transmissões bloqueadas em uma tabela.
 */
export class ListarJanelaBroadcastComponent {

  /**
   * Colunas exibidas na tabela.
   */
  displayedColumns: string[] = ['date', 'dayWeek', 'actions'];

  /**
   * Fonte de dados para exibição na tabela.
   */
  dataSource = ELEMENT_DATA;
}
