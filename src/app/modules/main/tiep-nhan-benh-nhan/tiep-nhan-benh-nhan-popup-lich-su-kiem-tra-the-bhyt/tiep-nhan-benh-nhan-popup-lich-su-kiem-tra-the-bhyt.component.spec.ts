import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent } from './tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt.component';

describe('TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent', () => {
  let component: TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent;
  let fixture: ComponentFixture<TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
