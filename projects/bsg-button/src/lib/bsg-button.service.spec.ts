import { TestBed } from '@angular/core/testing';

import { BsgButtonService } from './bsg-button.service';

describe('BsgButtonService', () => {
  let service: BsgButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BsgButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
