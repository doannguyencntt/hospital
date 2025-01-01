import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupChonPhieuInChiDinhComponent } from './popup-chon-phieu-in-chi-dinh.component';

describe('PopupChonPhieuInChiDinhComponent', () => {
  let component: PopupChonPhieuInChiDinhComponent;
  let fixture: ComponentFixture<PopupChonPhieuInChiDinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupChonPhieuInChiDinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupChonPhieuInChiDinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
