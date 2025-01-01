import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KetQuaCdhaTdcnDanhSachMauPopupComponent } from './ket-qua-cdha-tdcn-danh-sach-mau-popup.component';

describe('KetQuaCdhaTdcnDanhSachMauPopupComponent', () => {
  let component: KetQuaCdhaTdcnDanhSachMauPopupComponent;
  let fixture: ComponentFixture<KetQuaCdhaTdcnDanhSachMauPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetQuaCdhaTdcnDanhSachMauPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KetQuaCdhaTdcnDanhSachMauPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
