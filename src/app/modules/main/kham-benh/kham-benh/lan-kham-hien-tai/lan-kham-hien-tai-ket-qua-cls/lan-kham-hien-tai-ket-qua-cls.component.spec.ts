import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiKetQuaClsComponent } from './lan-kham-hien-tai-ket-qua-cls.component';

describe('LanKhamHienTaiKetQuaClsComponent', () => {
  let component: LanKhamHienTaiKetQuaClsComponent;
  let fixture: ComponentFixture<LanKhamHienTaiKetQuaClsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiKetQuaClsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiKetQuaClsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
