import { TestBed } from '@angular/core/testing';

import { SenhaService } from './senha.service';

describe('SenhaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SenhaService = TestBed.get(SenhaService);
    expect(service).toBeTruthy();
  });
});
