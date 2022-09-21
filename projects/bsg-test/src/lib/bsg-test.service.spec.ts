import { TestBed } from '@angular/core/testing';

import { BsgTestService } from './bsg-test.service';

describe('BsgTestService', () => {
  let service: BsgTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BsgTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
