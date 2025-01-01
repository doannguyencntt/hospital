import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapPhieuMuaDuocPhamComponent } from './lap-phieu-mua-duoc-pham.component';

describe('LapPhieuMuaDuocPhamComponent', () => {
  let component: LapPhieuMuaDuocPhamComponent;
  let fixture: ComponentFixture<LapPhieuMuaDuocPhamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapPhieuMuaDuocPhamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapPhieuMuaDuocPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
