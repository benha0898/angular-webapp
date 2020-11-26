import { TestBed, inject } from '@angular/core/testing';

import { LogTableService } from './log-table.service';

describe('LogTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogTableService]
    });
  });

  it('should be created', inject([LogTableService], (service: LogTableService) => {
    expect(service).toBeTruthy();
  }));
});
