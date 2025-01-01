/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SuaDuocPhamTonKhoPopupComponent } from './sua-duoc-pham-ton-kho-popup.component';

describe('SuaDuocPhamTonKhoPopupComponent', () => {
  let component: SuaDuocPhamTonKhoPopupComponent;
  let fixture: ComponentFixture<SuaDuocPhamTonKhoPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaDuocPhamTonKhoPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaDuocPhamTonKhoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
