import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CngPreExistenteComponent } from './cng-pre-existente.component';

describe('CngPreExistenteComponent', () => {
  let component: CngPreExistenteComponent;
  let fixture: ComponentFixture<CngPreExistenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CngPreExistenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CngPreExistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
