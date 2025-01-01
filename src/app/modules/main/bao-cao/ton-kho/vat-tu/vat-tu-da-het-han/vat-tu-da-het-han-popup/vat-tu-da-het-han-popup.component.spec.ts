import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VatTuDaHetHanPopupComponent } from './vat-tu-da-het-han-popup.component';

describe('VatTuDaHetHanPopupComponent', () => {
  let component: VatTuDaHetHanPopupComponent;
  let fixture: ComponentFixture<VatTuDaHetHanPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VatTuDaHetHanPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VatTuDaHetHanPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
