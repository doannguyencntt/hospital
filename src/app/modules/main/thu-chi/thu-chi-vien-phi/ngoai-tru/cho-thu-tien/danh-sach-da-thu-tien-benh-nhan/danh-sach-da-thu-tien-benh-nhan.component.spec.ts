import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DanhSachThuNganDaThuTienBenhNhanComponent } from './danh-sach-da-thu-tien-benh-nhan.component';
describe('DanhSachThuNganDaThuTienBenhNhanComponent', () => {
  let component: DanhSachThuNganDaThuTienBenhNhanComponent;
  let fixture: ComponentFixture<DanhSachThuNganDaThuTienBenhNhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachThuNganDaThuTienBenhNhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachThuNganDaThuTienBenhNhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
