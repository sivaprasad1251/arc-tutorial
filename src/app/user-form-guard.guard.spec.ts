import { TestBed } from '@angular/core/testing';

import { UserFormGuardGuard } from './user-form-guard.guard';

describe('UserFormGuardGuard', () => {
  let guard: UserFormGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserFormGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
