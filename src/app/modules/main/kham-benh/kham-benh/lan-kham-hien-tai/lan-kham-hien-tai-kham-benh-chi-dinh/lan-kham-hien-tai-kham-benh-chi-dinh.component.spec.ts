import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiKhamBenhChiDinhComponent } from './lan-kham-hien-tai-kham-benh-chi-dinh.component';

describe('LanKhamHienTaiKhamBenhChiDinhComponent', () => {
  let component: LanKhamHienTaiKhamBenhChiDinhComponent;
  let fixture: ComponentFixture<LanKhamHienTaiKhamBenhChiDinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiKhamBenhChiDinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiKhamBenhChiDinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
