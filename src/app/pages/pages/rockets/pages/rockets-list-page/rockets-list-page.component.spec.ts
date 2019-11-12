import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketsListPageComponent } from './rockets-list-page.component';

describe('RocketsListPageComponent', () => {
  let component: RocketsListPageComponent;
  let fixture: ComponentFixture<RocketsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
