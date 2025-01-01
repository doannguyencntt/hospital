/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NhapTruocChietKhauPopupComponent } from './nhap-truoc-chiet-khau-popup.component';

describe('NhapTruocChietKhauPopupComponent', () => {
  let component: NhapTruocChietKhauPopupComponent;
  let fixture: ComponentFixture<NhapTruocChietKhauPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhapTruocChietKhauPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhapTruocChietKhauPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
