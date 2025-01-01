import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoThuVienPhiChuaHoanListComponent } from './bao-cao-thu-vien-phi-chua-hoan-list.component';

describe('BaoCaoThuVienPhiChuaHoanListComponent', () => {
  let component: BaoCaoThuVienPhiChuaHoanListComponent;
  let fixture: ComponentFixture<BaoCaoThuVienPhiChuaHoanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoThuVienPhiChuaHoanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoThuVienPhiChuaHoanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
