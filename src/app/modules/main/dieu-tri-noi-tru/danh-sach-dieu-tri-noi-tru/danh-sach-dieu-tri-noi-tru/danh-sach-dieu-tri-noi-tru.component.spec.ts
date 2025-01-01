import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachDieuTriNoiTruComponent } from './danh-sach-dieu-tri-noi-tru.component';

describe('DanhSachDieuTriNoiTruComponent', () => {
  let component: DanhSachDieuTriNoiTruComponent;
  let fixture: ComponentFixture<DanhSachDieuTriNoiTruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachDieuTriNoiTruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachDieuTriNoiTruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
