import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuInPhieuSoKetMuoiLamComponent } from './phieu-in-phieu-so-ket-muoi-lam.component';

describe('PhieuInPhieuSoKetMuoiLamComponent', () => {
  let component: PhieuInPhieuSoKetMuoiLamComponent;
  let fixture: ComponentFixture<PhieuInPhieuSoKetMuoiLamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuInPhieuSoKetMuoiLamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuInPhieuSoKetMuoiLamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
