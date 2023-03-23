import { TestBed } from '@angular/core/testing';

import { OrderSnacksService } from './order-snacks.service';

describe('OrderSnacksService', () => {
  let service: OrderSnacksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderSnacksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
