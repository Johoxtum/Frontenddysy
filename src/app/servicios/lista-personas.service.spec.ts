import { TestBed } from '@angular/core/testing';

import { ListaPersonasService } from './lista-personas.service';

describe('ListaPersonasService', () => {
  let service: ListaPersonasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaPersonasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
