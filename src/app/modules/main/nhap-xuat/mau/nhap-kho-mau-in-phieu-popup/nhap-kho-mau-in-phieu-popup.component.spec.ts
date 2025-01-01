import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhapKhoMauInPhieuPopupComponent } from './nhap-kho-mau-in-phieu-popup.component';

describe('NhapKhoMauInPhieuPopupComponent', () => {
  let component: NhapKhoMauInPhieuPopupComponent;
  let fixture: ComponentFixture<NhapKhoMauInPhieuPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhapKhoMauInPhieuPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhapKhoMauInPhieuPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
