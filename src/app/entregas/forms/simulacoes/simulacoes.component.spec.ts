import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacoesComponent } from './simulacoes.component';

describe('SimulacoesComponent', () => {
  let component: SimulacoesComponent;
  let fixture: ComponentFixture<SimulacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
