import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DichVuKyThuatBenhVienSharedComponent } from './dich-vu-ky-thuat-benh-vien-shared.component';

describe('DichVuKyThuatBenhVienSharedComponent', () => {
  let component: DichVuKyThuatBenhVienSharedComponent;
  let fixture: ComponentFixture<DichVuKyThuatBenhVienSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DichVuKyThuatBenhVienSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DichVuKyThuatBenhVienSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
