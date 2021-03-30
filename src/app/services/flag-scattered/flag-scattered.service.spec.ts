import { TestBed } from '@angular/core/testing';

import { FlagScatteredService } from './flag-scattered.service';

describe('FlagScatteredService', () => {
  let service: FlagScatteredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlagScatteredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
