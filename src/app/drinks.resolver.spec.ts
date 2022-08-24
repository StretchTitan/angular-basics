import { TestBed } from '@angular/core/testing';

import { DrinksResolver } from './drinks.resolver';

describe('DrinksResolver', () => {
  let resolver: DrinksResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DrinksResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
