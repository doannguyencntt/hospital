import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapPhieuMuaVatTuComponent } from './lap-phieu-mua-vat-tu.component';

describe('LapPhieuMuaVatTuComponent', () => {
  let component: LapPhieuMuaVatTuComponent;
  let fixture: ComponentFixture<LapPhieuMuaVatTuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapPhieuMuaVatTuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapPhieuMuaVatTuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
