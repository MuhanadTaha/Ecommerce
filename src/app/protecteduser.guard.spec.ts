import { TestBed } from '@angular/core/testing';

import { ProtecteduserGuard } from './protecteduser.guard';

describe('ProtecteduserGuard', () => {
  let guard: ProtecteduserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProtecteduserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
