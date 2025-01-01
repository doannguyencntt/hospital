import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachLichSuDaThuComponent } from './danh-sach-lich-su-da-thu.component';

describe('DanhSachLichSuDaThuComponent', () => {
  let component: DanhSachLichSuDaThuComponent;
  let fixture: ComponentFixture<DanhSachLichSuDaThuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachLichSuDaThuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachLichSuDaThuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
