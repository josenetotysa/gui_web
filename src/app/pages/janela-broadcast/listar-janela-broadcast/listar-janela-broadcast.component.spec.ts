import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarJanelaBroadcastComponent } from './listar-janela-broadcast.component';

describe('ListarJanelaBroadcastComponent', () => {
  let component: ListarJanelaBroadcastComponent;
  let fixture: ComponentFixture<ListarJanelaBroadcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarJanelaBroadcastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarJanelaBroadcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
