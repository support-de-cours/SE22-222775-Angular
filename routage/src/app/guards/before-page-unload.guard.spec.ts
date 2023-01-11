import { TestBed } from '@angular/core/testing';

import { BeforePageUnloadGuard } from './before-page-unload.guard';

describe('BeforePageUnloadGuard', () => {
  let guard: BeforePageUnloadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BeforePageUnloadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
