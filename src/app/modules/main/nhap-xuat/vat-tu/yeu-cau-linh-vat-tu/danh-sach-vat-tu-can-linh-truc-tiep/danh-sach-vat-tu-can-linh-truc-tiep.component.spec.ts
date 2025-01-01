import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachYeuCauLinhVatTuComponent } from './danh-sach-vat-tu-can-bu.component';

describe('DanhSachYeuCauLinhVatTuComponent', () => {
  let component: DanhSachYeuCauLinhVatTuComponent;
  let fixture: ComponentFixture<DanhSachYeuCauLinhVatTuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachYeuCauLinhVatTuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachYeuCauLinhVatTuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
