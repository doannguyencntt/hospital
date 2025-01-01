import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent } from './tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet.component';

describe('TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent', () => {
  let component: TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent;
  let fixture: ComponentFixture<TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
