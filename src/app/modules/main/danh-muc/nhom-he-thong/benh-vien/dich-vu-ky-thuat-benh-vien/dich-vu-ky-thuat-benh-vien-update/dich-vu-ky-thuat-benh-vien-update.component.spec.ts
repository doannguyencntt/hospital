import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DichVuKyThuatBenhVienUpdateComponent } from './dich-vu-ky-thuat-benh-vien-update.component';

describe('DichVuKyThuatBenhVienUpdateComponent', () => {
  let component: DichVuKyThuatBenhVienUpdateComponent;
  let fixture: ComponentFixture<DichVuKyThuatBenhVienUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DichVuKyThuatBenhVienUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DichVuKyThuatBenhVienUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
