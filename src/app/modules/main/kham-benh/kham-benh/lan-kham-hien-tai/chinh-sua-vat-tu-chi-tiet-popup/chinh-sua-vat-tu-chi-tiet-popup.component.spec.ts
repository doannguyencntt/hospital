import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinhSuaVatTuChiTietPopupComponent } from './chinh-sua-vat-tu-chi-tiet-popup.component';

describe('ChinhSuaVatTuChiTietPopupComponent', () => {
  let component: ChinhSuaVatTuChiTietPopupComponent;
  let fixture: ComponentFixture<ChinhSuaVatTuChiTietPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinhSuaVatTuChiTietPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinhSuaVatTuChiTietPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
