import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent } from './bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list.component';

describe('BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent', () => {
  let component: BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent;
  let fixture: ComponentFixture<BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
