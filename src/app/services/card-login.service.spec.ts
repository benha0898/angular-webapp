import { TestBed, inject } from '@angular/core/testing';

import { CardLoginService } from './card-login.service';

describe('CardLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardLoginService]
    });
  });

  it('should be created', inject([CardLoginService], (service: CardLoginService) => {
    expect(service).toBeTruthy();
  }));
});
