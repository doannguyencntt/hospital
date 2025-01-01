import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiKetLuanComponent } from './lan-kham-hien-tai-ket-luan.component';

describe('LanKhamHienTaiKetLuanComponent', () => {
  let component: LanKhamHienTaiKetLuanComponent;
  let fixture: ComponentFixture<LanKhamHienTaiKetLuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiKetLuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiKetLuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
