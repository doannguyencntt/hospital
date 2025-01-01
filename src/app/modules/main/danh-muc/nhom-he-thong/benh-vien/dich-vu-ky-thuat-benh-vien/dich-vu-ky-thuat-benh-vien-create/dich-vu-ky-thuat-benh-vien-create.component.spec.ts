import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DichVuKyThuatBenhVienCreateComponent } from './dich-vu-ky-thuat-benh-vien-create.component';

describe('DichVuKyThuatBenhVienCreateComponent', () => {
  let component: DichVuKyThuatBenhVienCreateComponent;
  let fixture: ComponentFixture<DichVuKyThuatBenhVienCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DichVuKyThuatBenhVienCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DichVuKyThuatBenhVienCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
