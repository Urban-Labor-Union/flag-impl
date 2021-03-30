import { TestBed } from '@angular/core/testing';

import { FlagSingleService } from './flag-single.service';

describe('FlagSingleService', () => {
  let service: FlagSingleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlagSingleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
