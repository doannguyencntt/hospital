import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KetQuaCdhaTdcnThemHinhAnhPopupComponent } from './ket-qua-cdha-tdcn-them-hinh-anh-popup.component';

describe('KetQuaCdhaTdcnThemHinhAnhPopupComponent', () => {
  let component: KetQuaCdhaTdcnThemHinhAnhPopupComponent;
  let fixture: ComponentFixture<KetQuaCdhaTdcnThemHinhAnhPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetQuaCdhaTdcnThemHinhAnhPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KetQuaCdhaTdcnThemHinhAnhPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
