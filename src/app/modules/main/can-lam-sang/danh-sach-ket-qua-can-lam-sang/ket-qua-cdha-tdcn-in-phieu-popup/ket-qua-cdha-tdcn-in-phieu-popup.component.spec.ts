import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KetQuaCdhaTdcnInPhieuPopupComponent } from './ket-qua-cdha-tdcn-in-phieu-popup.component';

describe('KetQuaCdhaTdcnInPhieuPopupComponent', () => {
  let component: KetQuaCdhaTdcnInPhieuPopupComponent;
  let fixture: ComponentFixture<KetQuaCdhaTdcnInPhieuPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetQuaCdhaTdcnInPhieuPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KetQuaCdhaTdcnInPhieuPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
