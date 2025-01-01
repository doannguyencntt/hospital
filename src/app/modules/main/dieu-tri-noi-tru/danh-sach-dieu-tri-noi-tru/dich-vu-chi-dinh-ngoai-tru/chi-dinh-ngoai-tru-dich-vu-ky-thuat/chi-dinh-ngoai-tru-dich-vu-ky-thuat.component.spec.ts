import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiDinhNgoaiTruDichVuKyThuatComponent } from './chi-dinh-ngoai-tru-dich-vu-ky-thuat.component';

describe('ChiDinhNgoaiTruDichVuKyThuatComponent', () => {
  let component: ChiDinhNgoaiTruDichVuKyThuatComponent;
  let fixture: ComponentFixture<ChiDinhNgoaiTruDichVuKyThuatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiDinhNgoaiTruDichVuKyThuatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiDinhNgoaiTruDichVuKyThuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
