import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DanhSachThuTienNgoaiTruComponent } from './danh-sach-thu-tien-benh-nhan.component';

describe('DanhSachThuTienNgoaiTruComponent', () => {
  let component: DanhSachThuTienNgoaiTruComponent;
  let fixture: ComponentFixture<DanhSachThuTienNgoaiTruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachThuTienNgoaiTruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachThuTienNgoaiTruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
