import { TestBed, inject } from '@angular/core/testing';

import { CardTransacService } from './card-transac.service';

describe('CardTransacService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardTransacService]
    });
  });

  it('should be created', inject([CardTransacService], (service: CardTransacService) => {
    expect(service).toBeTruthy();
  }));
});
