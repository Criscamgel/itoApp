import { TestBed } from '@angular/core/testing';

import { OrdenescompraService } from './ordenescompra.service';

describe('OrdenescompraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdenescompraService = TestBed.get(OrdenescompraService);
    expect(service).toBeTruthy();
  });
});
