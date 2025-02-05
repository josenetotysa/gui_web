import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

export interface blockedBroadcastData {
  date: Date;
  dayWeek: string;
  actions: string
}

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

const dateList = [
  '2025-02-05',
  '2024-05-29',
  '2024-04-11',
  '2023-02-27',
  '2023-01-06',
  '2022-08-30',
  '2021-07-13'
];

const ELEMENT_DATA: blockedBroadcastData[] = generateMockData(dateList);

@Component({
  selector: 'app-listar-janela-broadcast',
  standalone: true,
  imports: [MatTableModule, NgxMaskDirective, NgxMaskPipe, DatePipe],
  templateUrl: './listar-janela-broadcast.component.html',
  styleUrl: './listar-janela-broadcast.component.scss'
})
export class ListarJanelaBroadcastComponent {

  displayedColumns: string[] = ['date', 'dayWeek', 'actions'];
  dataSource = ELEMENT_DATA;
}
