import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VatTuTonKhoChiTietComponent } from './vat-tu-ton-kho-chi-tiet.component';

describe('VatTuTonKhoChiTietComponent', () => {
  let component: VatTuTonKhoChiTietComponent;
  let fixture: ComponentFixture<VatTuTonKhoChiTietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VatTuTonKhoChiTietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VatTuTonKhoChiTietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
