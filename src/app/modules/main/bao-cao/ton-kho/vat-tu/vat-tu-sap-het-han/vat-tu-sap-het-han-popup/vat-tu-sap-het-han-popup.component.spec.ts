import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VatTuSapHetHanPopupComponent } from './vat-tu-sap-het-han-popup.component';

describe('VatTuSapHetHanPopupComponent', () => {
  let component: VatTuSapHetHanPopupComponent;
  let fixture: ComponentFixture<VatTuSapHetHanPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VatTuSapHetHanPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VatTuSapHetHanPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
