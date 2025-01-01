import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiepNhanBenhNhanPopupLichSuKcbComponent } from './tiep-nhan-benh-nhan-popup-lich-su-kcb.component';

describe('TiepNhanBenhNhanPopupLichSuKcbComponent', () => {
  let component: TiepNhanBenhNhanPopupLichSuKcbComponent;
  let fixture: ComponentFixture<TiepNhanBenhNhanPopupLichSuKcbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiepNhanBenhNhanPopupLichSuKcbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiepNhanBenhNhanPopupLichSuKcbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
