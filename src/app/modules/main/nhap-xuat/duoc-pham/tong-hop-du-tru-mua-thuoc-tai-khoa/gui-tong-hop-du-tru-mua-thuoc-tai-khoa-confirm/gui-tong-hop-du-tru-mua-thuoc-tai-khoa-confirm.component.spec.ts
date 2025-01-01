import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiTongHopDuTruMuaThuocTaiKhoaConfirmComponent } from './gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm.component';

describe('GuiTongHopDuTruMuaThuocTaiKhoaConfirmComponent', () => {
  let component: GuiTongHopDuTruMuaThuocTaiKhoaConfirmComponent;
  let fixture: ComponentFixture<GuiTongHopDuTruMuaThuocTaiKhoaConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiTongHopDuTruMuaThuocTaiKhoaConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiTongHopDuTruMuaThuocTaiKhoaConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
