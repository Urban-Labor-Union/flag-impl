import { TestBed } from '@angular/core/testing';

import { FlagConsolidatedService } from './flag-consolidated.service';

describe('FlagConsolidatedService', () => {
  let service: FlagConsolidatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlagConsolidatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
