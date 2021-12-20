import { TestBed } from '@angular/core/testing';

import { ComonInterceptor } from './comon.interceptor';

describe('ComonInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ComonInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ComonInterceptor = TestBed.inject(ComonInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
