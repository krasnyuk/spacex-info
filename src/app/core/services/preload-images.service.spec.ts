import { TestBed } from '@angular/core/testing';

import { PreloadImagesService } from './preload-images.service';

describe('PreloadImagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreloadImagesService = TestBed.get(PreloadImagesService);
    expect(service).toBeTruthy();
  });
});
