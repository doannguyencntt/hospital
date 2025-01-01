import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KetQuaXetNghiemPopupGoiDuyetComponent } from './ket-qua-xet-nghiem-popup-goi-duyet.component';

describe('KetQuaXetNghiemPopupGoiDuyetComponent', () => {
  let component: KetQuaXetNghiemPopupGoiDuyetComponent;
  let fixture: ComponentFixture<KetQuaXetNghiemPopupGoiDuyetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetQuaXetNghiemPopupGoiDuyetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KetQuaXetNghiemPopupGoiDuyetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
