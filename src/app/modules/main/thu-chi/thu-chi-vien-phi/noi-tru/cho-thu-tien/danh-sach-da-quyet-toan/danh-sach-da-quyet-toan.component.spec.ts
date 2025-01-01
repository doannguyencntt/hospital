import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DanhSachDaQuyetToan } from './danh-sach-da-quyet-toan.component';

describe('DanhSachDaQuyetToan', () => {
  let component: DanhSachDaQuyetToan;
  let fixture: ComponentFixture<DanhSachDaQuyetToan>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachDaQuyetToan ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachDaQuyetToan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
