import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayMauXetNghiemKetQuaPopupComponent } from './lay-mau-xet-nghiem-ket-qua-popup.component';

describe('LayMauXetNghiemKetQuaPopupComponent', () => {
  let component: LayMauXetNghiemKetQuaPopupComponent;
  let fixture: ComponentFixture<LayMauXetNghiemKetQuaPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayMauXetNghiemKetQuaPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayMauXetNghiemKetQuaPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
