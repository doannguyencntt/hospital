import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongHopDuTruMuaThuocTaiKhoaDetailComponent } from './tong-hop-du-tru-mua-thuoc-tai-khoa-detail.component';

describe('TongHopDuTruMuaThuocTaiKhoaDetailComponent', () => {
  let component: TongHopDuTruMuaThuocTaiKhoaDetailComponent;
  let fixture: ComponentFixture<TongHopDuTruMuaThuocTaiKhoaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongHopDuTruMuaThuocTaiKhoaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongHopDuTruMuaThuocTaiKhoaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
