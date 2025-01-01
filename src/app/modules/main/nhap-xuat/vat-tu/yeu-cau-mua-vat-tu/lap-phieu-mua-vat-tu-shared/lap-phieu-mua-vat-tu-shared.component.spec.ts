import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapPhieuMuaVatTuSharedComponent } from './lap-phieu-mua-vat-tu-shared.component';

describe('LapPhieuMuaVatTuSharedComponent', () => {
  let component: LapPhieuMuaVatTuSharedComponent;
  let fixture: ComponentFixture<LapPhieuMuaVatTuSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapPhieuMuaVatTuSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapPhieuMuaVatTuSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
