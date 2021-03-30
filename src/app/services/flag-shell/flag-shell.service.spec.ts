import { TestBed } from '@angular/core/testing';

import { FlagShellService } from './flag-shell.service';

describe('FlagShellService', () => {
  let service: FlagShellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlagShellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
