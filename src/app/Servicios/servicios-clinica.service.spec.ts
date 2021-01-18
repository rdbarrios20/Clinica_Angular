import { TestBed } from '@angular/core/testing';

import { ServiciosClinicaService } from './servicios-clinica.service';

describe('ServiciosClinicaService', () => {
  let service: ServiciosClinicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosClinicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
