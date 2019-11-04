import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTimelinePageComponent } from './history-timeline-page.component';

describe('HistoryTimelinePageComponent', () => {
  let component: HistoryTimelinePageComponent;
  let fixture: ComponentFixture<HistoryTimelinePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryTimelinePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryTimelinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
