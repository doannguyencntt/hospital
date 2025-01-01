import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayMauXetNghiemXacNhanHuyPopupComponent } from './lay-mau-xet-nghiem-xac-nhan-huy-popup.component';

describe('LayMauXetNghiemXacNhanHuyPopupComponent', () => {
  let component: LayMauXetNghiemXacNhanHuyPopupComponent;
  let fixture: ComponentFixture<LayMauXetNghiemXacNhanHuyPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayMauXetNghiemXacNhanHuyPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayMauXetNghiemXacNhanHuyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
