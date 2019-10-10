import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextLaunchPageComponent } from './next-launch-page.component';

describe('NextLaunchPageComponent', () => {
  let component: NextLaunchPageComponent;
  let fixture: ComponentFixture<NextLaunchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextLaunchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextLaunchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
