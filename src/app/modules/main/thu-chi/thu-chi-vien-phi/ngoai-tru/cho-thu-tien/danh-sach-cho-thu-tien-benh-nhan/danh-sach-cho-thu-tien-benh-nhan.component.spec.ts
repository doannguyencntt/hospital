import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachThuNganChoThuTienComponent } from './danh-sach-cho-thu-tien-benh-nhan.component';

describe('DanhSachThuNganChoThuTienComponent', () => {
  let component: DanhSachThuNganChoThuTienComponent;
  let fixture: ComponentFixture<DanhSachThuNganChoThuTienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachThuNganChoThuTienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachThuNganChoThuTienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
