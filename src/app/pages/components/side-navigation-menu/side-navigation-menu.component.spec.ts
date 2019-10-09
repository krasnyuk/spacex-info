import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigationMenuComponent } from './side-navigation-menu.component';

describe('SideNavigationMenuComponent', () => {
  let component: SideNavigationMenuComponent;
  let fixture: ComponentFixture<SideNavigationMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavigationMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavigationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
