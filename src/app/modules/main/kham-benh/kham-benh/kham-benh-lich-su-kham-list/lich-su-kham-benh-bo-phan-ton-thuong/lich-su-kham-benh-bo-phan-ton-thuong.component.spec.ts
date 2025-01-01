import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuKhamBenhBoPhanTonThuongComponent } from './lich-su-kham-benh-bo-phan-ton-thuong.component';

describe('LichSuKhamBenhBoPhanTonThuongComponent', () => {
  let component: LichSuKhamBenhBoPhanTonThuongComponent;
  let fixture: ComponentFixture<LichSuKhamBenhBoPhanTonThuongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuKhamBenhBoPhanTonThuongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuKhamBenhBoPhanTonThuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
