import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanMauXetNghiemTuChoiPopupComponent } from './nhan-mau-xet-nghiem-tu-choi-popup.component';

describe('NhanMauXetNghiemTuChoiPopupComponent', () => {
  let component: NhanMauXetNghiemTuChoiPopupComponent;
  let fixture: ComponentFixture<NhanMauXetNghiemTuChoiPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhanMauXetNghiemTuChoiPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhanMauXetNghiemTuChoiPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
