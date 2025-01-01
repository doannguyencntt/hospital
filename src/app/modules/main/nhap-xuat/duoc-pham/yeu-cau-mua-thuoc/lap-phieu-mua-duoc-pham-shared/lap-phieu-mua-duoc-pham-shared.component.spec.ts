import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapPhieuMuaDuocPhamSharedComponent } from './lap-phieu-mua-duoc-pham-shared.component';

describe('LapPhieuMuaDuocPhamSharedComponent', () => {
  let component: LapPhieuMuaDuocPhamSharedComponent;
  let fixture: ComponentFixture<LapPhieuMuaDuocPhamSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapPhieuMuaDuocPhamSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapPhieuMuaDuocPhamSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
