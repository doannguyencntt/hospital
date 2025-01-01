import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DanhSachChoQuyetToan } from './danh-sach-cho-quyet-toan.component';

describe('DanhSachChoQuyetToan', () => {
  let component: DanhSachChoQuyetToan;
  let fixture: ComponentFixture<DanhSachChoQuyetToan>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachChoQuyetToan ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachChoQuyetToan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
