import { TestBed } from '@angular/core/testing';

import { CineservicioService } from './cineservicio.service';

describe('CineservicioService', () => {
  let service: CineservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CineservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
