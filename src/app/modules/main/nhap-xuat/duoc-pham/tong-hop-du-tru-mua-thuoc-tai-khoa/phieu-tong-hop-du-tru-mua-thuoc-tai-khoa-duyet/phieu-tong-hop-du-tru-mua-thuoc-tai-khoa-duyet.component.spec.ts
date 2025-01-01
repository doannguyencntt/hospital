import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuTongHopDuTruMuaThuocTaiKhoaDuyetComponent } from './phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component';

describe('PhieuTongHopDuTruMuaThuocTaiKhoaDuyetComponent', () => {
  let component: PhieuTongHopDuTruMuaThuocTaiKhoaDuyetComponent;
  let fixture: ComponentFixture<PhieuTongHopDuTruMuaThuocTaiKhoaDuyetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuTongHopDuTruMuaThuocTaiKhoaDuyetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuTongHopDuTruMuaThuocTaiKhoaDuyetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
