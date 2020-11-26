import { TestBed, inject } from '@angular/core/testing';

import { PointcardsTableService } from './pointcards-table.service';

describe('PointcardsTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PointcardsTableService]
    });
  });

  it('should be created', inject([PointcardsTableService], (service: PointcardsTableService) => {
    expect(service).toBeTruthy();
  }));
});
