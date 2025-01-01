import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoBangKeXuatThuocTheoBenhNhanListComponent } from './bao-cao-bang-ke-xuat-thuoc-theo-benh-nhan-list.component';

describe('BaoCaoBangKeXuatThuocTheoBenhNhanListComponent', () => {
  let component: BaoCaoBangKeXuatThuocTheoBenhNhanListComponent;
  let fixture: ComponentFixture<BaoCaoBangKeXuatThuocTheoBenhNhanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoBangKeXuatThuocTheoBenhNhanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoBangKeXuatThuocTheoBenhNhanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
