import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DanhSachThuNganChoThuTienNoiTruComponent } from './danh-sach-cho-thu-tien.component';
describe('DanhSachThuNganChoThuTienNoiTruComponent', () => {
  let component: DanhSachThuNganChoThuTienNoiTruComponent;
  let fixture: ComponentFixture<DanhSachThuNganChoThuTienNoiTruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachThuNganChoThuTienNoiTruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachThuNganChoThuTienNoiTruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
