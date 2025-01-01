/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CapNhatTtThucHienDvktPopupComponent } from './cap-nhat-tt-thuc-hien-dvkt-popup.component';

describe('CapNhatTtThucHienDvktPopupComponent', () => {
  let component: CapNhatTtThucHienDvktPopupComponent;
  let fixture: ComponentFixture<CapNhatTtThucHienDvktPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapNhatTtThucHienDvktPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapNhatTtThucHienDvktPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
