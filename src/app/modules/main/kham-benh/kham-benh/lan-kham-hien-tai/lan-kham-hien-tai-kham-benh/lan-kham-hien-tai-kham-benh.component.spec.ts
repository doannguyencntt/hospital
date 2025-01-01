import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiKhamBenhComponent } from './lan-kham-hien-tai-kham-benh.component'

describe('LanKhamHienTaiKhamBenhComponent', () => {
  let component: LanKhamHienTaiKhamBenhComponent;
  let fixture: ComponentFixture<LanKhamHienTaiKhamBenhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiKhamBenhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiKhamBenhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
