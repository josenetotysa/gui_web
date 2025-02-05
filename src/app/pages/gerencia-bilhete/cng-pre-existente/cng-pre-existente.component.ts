import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { ToastrService } from 'ngx-toastr';

export interface providerData {
  phoneNumber: number | string;
  providerId: number;
}

const ELEMENT_DATA: providerData[] = [
 {phoneNumber: 3498887717, providerId: 1},
 {phoneNumber: 3498887718, providerId: 2},
 {phoneNumber: 3498887765, providerId: 3},
 {phoneNumber: 3491234325, providerId: 4},
];

@Component({
  selector: 'app-cng-pre-existente',
  standalone: true,
  imports: [MatTableModule, NgxMaskDirective, NgxMaskPipe, ReactiveFormsModule],
  templateUrl: './cng-pre-existente.component.html',
  styleUrl: './cng-pre-existente.component.scss'
})
export class CngPreExistenteComponent {

  constructor(private toastr: ToastrService) {}

  filterForm = new FormGroup({
    CN: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    number: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    MCDU: new FormControl(null, [Validators.required, Validators.minLength(4)]),
  });

  displayedColumns: string[] = ['phoneNumber', 'providerId'];
  dataSource = ELEMENT_DATA;
  isFilterOpen = true;

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

  resetFilter() {
    this.filterForm.reset();
    this.dataSource = ELEMENT_DATA;
  }

  toggleAccordion() {
    this.isFilterOpen = !this.isFilterOpen;
  }
}
