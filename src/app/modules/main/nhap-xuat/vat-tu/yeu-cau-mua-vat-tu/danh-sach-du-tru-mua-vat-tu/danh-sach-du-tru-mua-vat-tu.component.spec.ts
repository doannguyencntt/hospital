import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachDuTruMuaVatTuComponent } from './danh-sach-du-tru-mua-vat-tu.component';

describe('DanhSachDuTruMuaVatTuComponent', () => {
  let component: DanhSachDuTruMuaVatTuComponent;
  let fixture: ComponentFixture<DanhSachDuTruMuaVatTuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachDuTruMuaVatTuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachDuTruMuaVatTuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
