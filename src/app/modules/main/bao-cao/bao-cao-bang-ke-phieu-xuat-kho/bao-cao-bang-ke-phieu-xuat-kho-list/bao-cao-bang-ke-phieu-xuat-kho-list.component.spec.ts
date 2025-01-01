import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoBangKePhieuXuatKhoListComponent } from './bao-cao-bang-ke-phieu-xuat-kho-list.component';

describe('BaoCaoBangKePhieuXuatKhoListComponent', () => {
  let component: BaoCaoBangKePhieuXuatKhoListComponent;
  let fixture: ComponentFixture<BaoCaoBangKePhieuXuatKhoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoBangKePhieuXuatKhoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoBangKePhieuXuatKhoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
