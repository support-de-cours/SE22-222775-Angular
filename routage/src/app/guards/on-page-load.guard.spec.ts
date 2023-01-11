import { TestBed } from '@angular/core/testing';

import { OnPageLoadGuard } from './on-page-load.guard';

describe('OnPageLoadGuard', () => {
  let guard: OnPageLoadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnPageLoadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
