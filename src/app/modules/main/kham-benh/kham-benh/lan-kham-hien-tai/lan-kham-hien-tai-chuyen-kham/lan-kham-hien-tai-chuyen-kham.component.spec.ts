import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiChuyenKhamComponent } from './lan-kham-hien-tai-chuyen-kham.component';

describe('LanKhamHienTaiChuyenKhamComponent', () => {
  let component: LanKhamHienTaiChuyenKhamComponent;
  let fixture: ComponentFixture<LanKhamHienTaiChuyenKhamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiChuyenKhamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiChuyenKhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
