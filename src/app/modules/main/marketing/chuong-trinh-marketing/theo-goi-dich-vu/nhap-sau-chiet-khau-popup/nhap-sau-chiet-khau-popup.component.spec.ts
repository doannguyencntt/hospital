/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NhapSauChietKhauPopupComponent } from './nhap-sau-chiet-khau-popup.component';

describe('NhapSauChietKhauPopupComponent', () => {
  let component: NhapSauChietKhauPopupComponent;
  let fixture: ComponentFixture<NhapSauChietKhauPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhapSauChietKhauPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhapSauChietKhauPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
