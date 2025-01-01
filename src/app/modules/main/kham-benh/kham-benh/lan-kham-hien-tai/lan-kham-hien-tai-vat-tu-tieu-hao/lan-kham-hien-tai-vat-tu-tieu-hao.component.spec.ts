import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiVatTuTieuHaoComponent } from './lan-kham-hien-tai-vat-tu-tieu-hao.component';

describe('LanKhamHienTaiVatTuTieuHaoComponent', () => {
  let component: LanKhamHienTaiVatTuTieuHaoComponent;
  let fixture: ComponentFixture<LanKhamHienTaiVatTuTieuHaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiVatTuTieuHaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiVatTuTieuHaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
