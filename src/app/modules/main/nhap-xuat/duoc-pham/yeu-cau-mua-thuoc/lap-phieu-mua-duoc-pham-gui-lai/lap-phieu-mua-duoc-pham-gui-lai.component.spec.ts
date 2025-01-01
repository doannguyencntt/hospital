import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapPhieuMuaDuocPhamGuiLaiComponent } from './lap-phieu-mua-duoc-pham-gui-lai.component';

describe('LapPhieuMuaDuocPhamGuiLaiComponent', () => {
  let component: LapPhieuMuaDuocPhamGuiLaiComponent;
  let fixture: ComponentFixture<LapPhieuMuaDuocPhamGuiLaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapPhieuMuaDuocPhamGuiLaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapPhieuMuaDuocPhamGuiLaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
