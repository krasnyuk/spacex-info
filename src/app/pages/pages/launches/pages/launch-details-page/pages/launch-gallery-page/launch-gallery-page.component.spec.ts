import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchGalleryPageComponent } from './launch-gallery-page.component';

describe('LaunchGalleryPageComponent', () => {
  let component: LaunchGalleryPageComponent;
  let fixture: ComponentFixture<LaunchGalleryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchGalleryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchGalleryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
