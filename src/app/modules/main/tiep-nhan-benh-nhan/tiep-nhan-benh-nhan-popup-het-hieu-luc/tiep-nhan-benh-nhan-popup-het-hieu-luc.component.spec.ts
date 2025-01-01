import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiepNhanBenhNhanPopupHetHieuLucComponent } from './tiep-nhan-benh-nhan-popup-het-hieu-luc.component';

describe('TiepNhanBenhNhanPopupHetHieuLucComponent', () => {
  let component: TiepNhanBenhNhanPopupHetHieuLucComponent;
  let fixture: ComponentFixture<TiepNhanBenhNhanPopupHetHieuLucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiepNhanBenhNhanPopupHetHieuLucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiepNhanBenhNhanPopupHetHieuLucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
