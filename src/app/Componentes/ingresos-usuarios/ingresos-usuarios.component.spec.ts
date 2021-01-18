import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosUsuariosComponent } from './ingresos-usuarios.component';

describe('IngresosUsuariosComponent', () => {
  let component: IngresosUsuariosComponent;
  let fixture: ComponentFixture<IngresosUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresosUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresosUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
