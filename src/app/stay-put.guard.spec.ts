import { TestBed } from '@angular/core/testing';

import { StayPutGuard } from './stay-put.guard';

describe('StayPutGuard', () => {
  let guard: StayPutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StayPutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
