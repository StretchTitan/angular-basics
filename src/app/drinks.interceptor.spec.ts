import { TestBed } from '@angular/core/testing';

import { DrinksInterceptor } from './drinks.interceptor';

describe('DrinksInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DrinksInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: DrinksInterceptor = TestBed.inject(DrinksInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
