import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoTongHopDangKyGoiDichVuListComponent } from './bao-cao-tong-hop-dang-ky-goi-dich-vu-list.component';

describe('BaoCaoTongHopDangKyGoiDichVuListComponent', () => {
  let component: BaoCaoTongHopDangKyGoiDichVuListComponent;
  let fixture: ComponentFixture<BaoCaoTongHopDangKyGoiDichVuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoTongHopDangKyGoiDichVuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoTongHopDangKyGoiDichVuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
