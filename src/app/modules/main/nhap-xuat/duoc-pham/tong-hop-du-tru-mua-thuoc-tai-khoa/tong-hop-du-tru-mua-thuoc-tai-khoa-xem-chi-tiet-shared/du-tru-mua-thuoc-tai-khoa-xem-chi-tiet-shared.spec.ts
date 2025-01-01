import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent } from './du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared.component';

describe('TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent', () => {
  let component: TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent;
  let fixture: ComponentFixture<TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
