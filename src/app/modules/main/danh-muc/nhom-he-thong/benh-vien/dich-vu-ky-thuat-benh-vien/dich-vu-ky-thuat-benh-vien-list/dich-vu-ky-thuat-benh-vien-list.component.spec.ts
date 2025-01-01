import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DichVuKyThuatBenhVienListComponent } from './dich-vu-ky-thuat-benh-vien-list.component';

describe('DichVuKyThuatBenhVienListComponent', () => {
  let component: DichVuKyThuatBenhVienListComponent;
  let fixture: ComponentFixture<DichVuKyThuatBenhVienListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DichVuKyThuatBenhVienListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DichVuKyThuatBenhVienListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
