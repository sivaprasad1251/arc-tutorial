import { TestBed } from '@angular/core/testing';

import { UseResolver } from './use.resolver';

describe('UseResolver', () => {
  let resolver: UseResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UseResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
