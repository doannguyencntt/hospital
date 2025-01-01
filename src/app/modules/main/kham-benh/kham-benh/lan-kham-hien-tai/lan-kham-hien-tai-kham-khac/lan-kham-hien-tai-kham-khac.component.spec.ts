import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiKhamKhacComponent } from './lan-kham-hien-tai-kham-khac.component';

describe('LanKhamHienTaiKhamKhacComponent', () => {
  let component: LanKhamHienTaiKhamKhacComponent;
  let fixture: ComponentFixture<LanKhamHienTaiKhamKhacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiKhamKhacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiKhamKhacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
