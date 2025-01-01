import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XemKetQuaCdhaTdcnPopupComponent } from './xem-ket-qua-cdha-tdcn-popup.component';

describe('XemKetQuaCdhaTdcnPopupComponent', () => {
  let component: XemKetQuaCdhaTdcnPopupComponent;
  let fixture: ComponentFixture<XemKetQuaCdhaTdcnPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XemKetQuaCdhaTdcnPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XemKetQuaCdhaTdcnPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
