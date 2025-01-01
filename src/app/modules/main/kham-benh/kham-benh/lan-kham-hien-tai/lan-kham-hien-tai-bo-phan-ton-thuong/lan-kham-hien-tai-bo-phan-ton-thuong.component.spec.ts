import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiBoPhanTonThuongComponent } from './lan-kham-hien-tai-bo-phan-ton-thuong.component';

describe('LanKhamHienTaiBoPhanTonThuongComponent', () => {
  let component: LanKhamHienTaiBoPhanTonThuongComponent;
  let fixture: ComponentFixture<LanKhamHienTaiBoPhanTonThuongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiBoPhanTonThuongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiBoPhanTonThuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
