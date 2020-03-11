import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchVideoPageComponent } from './launch-video-page.component';

describe('LaunchVideoPageComponent', () => {
  let component: LaunchVideoPageComponent;
  let fixture: ComponentFixture<LaunchVideoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchVideoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchVideoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
