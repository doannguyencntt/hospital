import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMarketingCheckTrungComponent } from './popup-marketing-check-trung.component';

describe('PopupMarketingCheckTrungComponent', () => {
  let component: PopupMarketingCheckTrungComponent;
  let fixture: ComponentFixture<PopupMarketingCheckTrungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupMarketingCheckTrungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupMarketingCheckTrungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
