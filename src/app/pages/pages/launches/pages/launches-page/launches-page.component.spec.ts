import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesPageComponent } from './launches-page.component';

describe('LaunchesPageComponent', () => {
  let component: LaunchesPageComponent;
  let fixture: ComponentFixture<LaunchesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
