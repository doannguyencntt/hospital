import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuKhamDoanTuVanThuocComponent } from './lich-su-kham-doan-tu-van-thuoc.component';

describe('LichSuKhamDoanTuVanThuocComponent', () => {
  let component: LichSuKhamDoanTuVanThuocComponent;
  let fixture: ComponentFixture<LichSuKhamDoanTuVanThuocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuKhamDoanTuVanThuocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuKhamDoanTuVanThuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
