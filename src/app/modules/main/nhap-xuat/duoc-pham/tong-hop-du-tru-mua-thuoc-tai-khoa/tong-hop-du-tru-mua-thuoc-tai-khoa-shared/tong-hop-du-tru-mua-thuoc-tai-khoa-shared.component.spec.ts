import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongHopDuTruMuaThuocTaiKhoaSharedComponent } from './tong-hop-du-tru-mua-thuoc-tai-khoa-shared.component';

describe('TongHopDuTruMuaThuocTaiKhoaSharedComponent', () => {
  let component: TongHopDuTruMuaThuocTaiKhoaSharedComponent;
  let fixture: ComponentFixture<TongHopDuTruMuaThuocTaiKhoaSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongHopDuTruMuaThuocTaiKhoaSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongHopDuTruMuaThuocTaiKhoaSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
