import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiTongHopDuTruMuaThuocTaiKhoaDuyetComponent } from './gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component';

describe('GuiTongHopDuTruMuaThuocTaiKhoaDuyetComponent', () => {
  let component: GuiTongHopDuTruMuaThuocTaiKhoaDuyetComponent;
  let fixture: ComponentFixture<GuiTongHopDuTruMuaThuocTaiKhoaDuyetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiTongHopDuTruMuaThuocTaiKhoaDuyetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiTongHopDuTruMuaThuocTaiKhoaDuyetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
