import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiayRaVienPopupComponent } from './giay-ra-vien-popup.component';

describe('GiayRaVienPopupComponent', () => {
  let component: GiayRaVienPopupComponent;
  let fixture: ComponentFixture<GiayRaVienPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiayRaVienPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiayRaVienPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
