import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayMauXetNghiemInBarcodeComponent } from './lay-mau-xet-nghiem-in-barcode.component';

describe('LayMauXetNghiemInBarcodeComponent', () => {
  let component: LayMauXetNghiemInBarcodeComponent;
  let fixture: ComponentFixture<LayMauXetNghiemInBarcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayMauXetNghiemInBarcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayMauXetNghiemInBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
