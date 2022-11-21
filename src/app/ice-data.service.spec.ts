import { TestBed } from '@angular/core/testing';

import { IceDataService } from './ice-data.service';

describe('IceDataService', () => {
  let service: IceDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IceDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
