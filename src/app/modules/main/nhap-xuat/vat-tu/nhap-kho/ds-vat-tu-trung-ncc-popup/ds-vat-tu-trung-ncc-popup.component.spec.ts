import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsVatTuTrungNccPopupComponent } from './ds-vat-tu-trung-ncc-popup.component';

describe('DsVatTuTrungNccPopupComponent', () => {
  let component: DsVatTuTrungNccPopupComponent;
  let fixture: ComponentFixture<DsVatTuTrungNccPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsVatTuTrungNccPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsVatTuTrungNccPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
