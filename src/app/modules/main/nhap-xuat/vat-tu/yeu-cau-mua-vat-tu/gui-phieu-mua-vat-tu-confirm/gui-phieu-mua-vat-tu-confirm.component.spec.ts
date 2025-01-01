import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiPhieuMuaVatTuConfirmComponent } from './gui-phieu-mua-vat-tu-confirm.component';

describe('GuiPhieuMuaVatTuConfirmComponent', () => {
  let component: GuiPhieuMuaVatTuConfirmComponent;
  let fixture: ComponentFixture<GuiPhieuMuaVatTuConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiPhieuMuaVatTuConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiPhieuMuaVatTuConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
