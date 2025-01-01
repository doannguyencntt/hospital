import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapPhieuMuaVatTuGuiLaiComponent } from './lap-phieu-mua-vat-tu-gui-lai.component';

describe('LapPhieuMuaVatTuGuiLaiComponent', () => {
  let component: LapPhieuMuaVatTuGuiLaiComponent;
  let fixture: ComponentFixture<LapPhieuMuaVatTuGuiLaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapPhieuMuaVatTuGuiLaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapPhieuMuaVatTuGuiLaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
