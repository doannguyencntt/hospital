import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinDichVuKyThuatPopupComponent } from './thong-tin-dich-vu-ky-thuat-popup.component';

describe('ThongTinDichVuKyThuatPopupComponent', () => {
  let component: ThongTinDichVuKyThuatPopupComponent;
  let fixture: ComponentFixture<ThongTinDichVuKyThuatPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinDichVuKyThuatPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinDichVuKyThuatPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
