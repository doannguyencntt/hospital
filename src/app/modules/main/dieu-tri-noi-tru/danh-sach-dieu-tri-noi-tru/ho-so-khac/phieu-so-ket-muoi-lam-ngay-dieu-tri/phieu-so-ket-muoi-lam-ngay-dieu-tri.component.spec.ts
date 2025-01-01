import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuSoKetMuoiLamNgayDieuTriComponent } from './phieu-so-ket-muoi-lam-ngay-dieu-tri.component';

describe('PhieuSoKetMuoiLamNgayDieuTriComponent', () => {
  let component: PhieuSoKetMuoiLamNgayDieuTriComponent;
  let fixture: ComponentFixture<PhieuSoKetMuoiLamNgayDieuTriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuSoKetMuoiLamNgayDieuTriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuSoKetMuoiLamNgayDieuTriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
