import { TestBed } from '@angular/core/testing';

import { ProductcategorysService } from './productcategorys.service';

describe('ProductcategorysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductcategorysService = TestBed.get(ProductcategorysService);
    expect(service).toBeTruthy();
  });
});
