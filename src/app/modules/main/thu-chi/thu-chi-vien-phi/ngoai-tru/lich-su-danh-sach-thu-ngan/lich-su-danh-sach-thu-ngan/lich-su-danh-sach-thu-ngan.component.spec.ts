import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuDanhSachThuNganComponent } from './lich-su-danh-sach-thu-ngan.component';

describe('LichSuDanhSachThuNganComponent', () => {
  let component: LichSuDanhSachThuNganComponent;
  let fixture: ComponentFixture<LichSuDanhSachThuNganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuDanhSachThuNganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuDanhSachThuNganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
