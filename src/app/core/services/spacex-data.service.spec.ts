import { TestBed } from '@angular/core/testing';

import { SpacexDataService } from './spacex-data.service';

describe('SpacexDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpacexDataService = TestBed.get(SpacexDataService);
    expect(service).toBeTruthy();
  });
});
