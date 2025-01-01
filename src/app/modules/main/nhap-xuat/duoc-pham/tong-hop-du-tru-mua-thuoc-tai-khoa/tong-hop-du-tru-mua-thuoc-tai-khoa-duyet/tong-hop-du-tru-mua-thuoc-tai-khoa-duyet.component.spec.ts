import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongHopDuTruMuaThuocTaiKhoaDuyetComponent } from './tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component';

describe('TongHopDuTruMuaThuocTaiKhoaDuyetComponent', () => {
  let component: TongHopDuTruMuaThuocTaiKhoaDuyetComponent;
  let fixture: ComponentFixture<TongHopDuTruMuaThuocTaiKhoaDuyetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongHopDuTruMuaThuocTaiKhoaDuyetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongHopDuTruMuaThuocTaiKhoaDuyetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
