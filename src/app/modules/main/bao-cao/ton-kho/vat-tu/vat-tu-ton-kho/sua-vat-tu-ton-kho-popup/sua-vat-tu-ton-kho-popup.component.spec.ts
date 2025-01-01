/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SuaVatTuTonKhoPopupComponent } from './sua-vat-tu-ton-kho-popup.component';

describe('SuaVatTuTonKhoPopupComponent', () => {
  let component: SuaVatTuTonKhoPopupComponent;
  let fixture: ComponentFixture<SuaVatTuTonKhoPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaVatTuTonKhoPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaVatTuTonKhoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
