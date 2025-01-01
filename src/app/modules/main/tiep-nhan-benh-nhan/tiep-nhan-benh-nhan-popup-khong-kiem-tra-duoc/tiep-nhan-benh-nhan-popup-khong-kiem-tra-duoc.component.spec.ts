import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiepNhanBenhNhanPopupKhongKiemTraDuocComponent } from './tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc.component';

describe('TiepNhanBenhNhanPopupKhongKiemTraDuocComponent', () => {
  let component: TiepNhanBenhNhanPopupKhongKiemTraDuocComponent;
  let fixture: ComponentFixture<TiepNhanBenhNhanPopupKhongKiemTraDuocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiepNhanBenhNhanPopupKhongKiemTraDuocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiepNhanBenhNhanPopupKhongKiemTraDuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
