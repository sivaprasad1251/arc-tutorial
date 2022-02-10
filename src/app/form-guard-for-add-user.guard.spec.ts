import { TestBed } from '@angular/core/testing';

import { FormGuardForAddUserGuard } from './form-guard-for-add-user.guard';

describe('FormGuardForAddUserGuard', () => {
  let guard: FormGuardForAddUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FormGuardForAddUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
