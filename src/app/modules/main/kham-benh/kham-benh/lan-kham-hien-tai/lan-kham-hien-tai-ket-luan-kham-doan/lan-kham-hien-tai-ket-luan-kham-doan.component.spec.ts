import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiKetLuanKhamDoanComponent } from './lan-kham-hien-tai-ket-luan-kham-doan.component';

describe('LanKhamHienTaiKetLuanKhamDoanComponent', () => {
  let component: LanKhamHienTaiKetLuanKhamDoanComponent;
  let fixture: ComponentFixture<LanKhamHienTaiKetLuanKhamDoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiKetLuanKhamDoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiKetLuanKhamDoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
