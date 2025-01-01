import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMarketingCheckTrungUpdateComponent } from './popup-marketing-check-trung-update.component';

describe('PopupMarketingCheckTrungUpdateComponent', () => {
  let component: PopupMarketingCheckTrungUpdateComponent;
  let fixture: ComponentFixture<PopupMarketingCheckTrungUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupMarketingCheckTrungUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupMarketingCheckTrungUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
