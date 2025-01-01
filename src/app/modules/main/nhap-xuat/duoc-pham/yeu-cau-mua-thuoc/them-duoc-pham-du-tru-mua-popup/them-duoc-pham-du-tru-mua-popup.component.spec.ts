import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemDuocPhamDuTruMuaPopupComponent } from './them-duoc-pham-du-tru-mua-popup.component';

describe('ThemDuocPhamDuTruMuaPopupComponent', () => {
  let component: ThemDuocPhamDuTruMuaPopupComponent;
  let fixture: ComponentFixture<ThemDuocPhamDuTruMuaPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemDuocPhamDuTruMuaPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemDuocPhamDuTruMuaPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
