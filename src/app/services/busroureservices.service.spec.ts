import { TestBed } from '@angular/core/testing';

import { BusroureservicesService } from './busroureservices.service';

describe('BusroureservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusroureservicesService = TestBed.get(BusroureservicesService);
    expect(service).toBeTruthy();
  });
});
