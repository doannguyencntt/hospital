import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiHoanTraThuocVtthPopupComponent } from './lan-kham-hien-tai-hoan-tra-thuoc-vtth-popup.component';

describe('LanKhamHienTaiHoanTraThuocVtthPopupComponent', () => {
  let component: LanKhamHienTaiHoanTraThuocVtthPopupComponent;
  let fixture: ComponentFixture<LanKhamHienTaiHoanTraThuocVtthPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiHoanTraThuocVtthPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiHoanTraThuocVtthPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
