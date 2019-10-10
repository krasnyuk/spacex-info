import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchDetailsPageComponent } from './launch-details-page.component';

describe('LaunchDetailsPageComponent', () => {
  let component: LaunchDetailsPageComponent;
  let fixture: ComponentFixture<LaunchDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
