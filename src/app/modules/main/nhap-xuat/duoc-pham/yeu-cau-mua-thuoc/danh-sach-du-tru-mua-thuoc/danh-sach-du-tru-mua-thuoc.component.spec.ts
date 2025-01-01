import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachDuTruMuaThuocComponent } from './danh-sach-du-tru-mua-thuoc.component';

describe('DanhSachDuTruMuaThuocComponent', () => {
  let component: DanhSachDuTruMuaThuocComponent;
  let fixture: ComponentFixture<DanhSachDuTruMuaThuocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachDuTruMuaThuocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachDuTruMuaThuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
