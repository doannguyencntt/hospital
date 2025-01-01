import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanTiepNhanInHoSoPopupComponent } from './kham-doan-tiep-nhan-in-ho-so-popup.component';

describe('KhamDoanTiepNhanInHoSoPopupComponent', () => {
  let component: KhamDoanTiepNhanInHoSoPopupComponent;
  let fixture: ComponentFixture<KhamDoanTiepNhanInHoSoPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanTiepNhanInHoSoPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanTiepNhanInHoSoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
