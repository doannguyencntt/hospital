import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiKhamBenhChiSoSinhTonComponent} from './lan-kham-hien-tai-kham-benh-chi-so-sinh-ton.component';

describe('LanKhamHienTaiKhamBenhChiSoSinhTonComponent', () => {
  let component: LanKhamHienTaiKhamBenhChiSoSinhTonComponent;
  let fixture: ComponentFixture<LanKhamHienTaiKhamBenhChiSoSinhTonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiKhamBenhChiSoSinhTonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiKhamBenhChiSoSinhTonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
