import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavWrapperPageComponent } from './side-nav-wrapper-page.component';

describe('SideNavWrapperPageComponent', () => {
  let component: SideNavWrapperPageComponent;
  let fixture: ComponentFixture<SideNavWrapperPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavWrapperPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavWrapperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
