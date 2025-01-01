import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuDanhSachCanLamSangComponent } from './lich-su-danh-sach-can-lam-sang.component';

describe('LichSuDanhSachCanLamSangComponent', () => {
  let component: LichSuDanhSachCanLamSangComponent;
  let fixture: ComponentFixture<LichSuDanhSachCanLamSangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuDanhSachCanLamSangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuDanhSachCanLamSangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
