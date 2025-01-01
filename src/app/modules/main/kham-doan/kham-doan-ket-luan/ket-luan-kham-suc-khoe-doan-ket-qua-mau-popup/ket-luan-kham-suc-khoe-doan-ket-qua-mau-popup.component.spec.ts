import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KetLuanKhamSucKhoeDoanKetQuaMauPopupComponent } from './ket-luan-kham-suc-khoe-doan-ket-qua-mau-popup.component';

describe('KetLuanKhamSucKhoeDoanKetQuaMauPopupComponent', () => {
  let component: KetLuanKhamSucKhoeDoanKetQuaMauPopupComponent;
  let fixture: ComponentFixture<KetLuanKhamSucKhoeDoanKetQuaMauPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetLuanKhamSucKhoeDoanKetQuaMauPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KetLuanKhamSucKhoeDoanKetQuaMauPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
