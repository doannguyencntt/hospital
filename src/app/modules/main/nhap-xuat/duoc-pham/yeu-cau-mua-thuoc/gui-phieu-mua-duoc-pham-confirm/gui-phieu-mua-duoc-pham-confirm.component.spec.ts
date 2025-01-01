import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiPhieuMuaDuocPhamConfirmComponent } from './gui-phieu-mua-duoc-pham-confirm.component';

describe('GuiPhieuMuaDuocPhamConfirmComponent', () => {
  let component: GuiPhieuMuaDuocPhamConfirmComponent;
  let fixture: ComponentFixture<GuiPhieuMuaDuocPhamConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiPhieuMuaDuocPhamConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiPhieuMuaDuocPhamConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
