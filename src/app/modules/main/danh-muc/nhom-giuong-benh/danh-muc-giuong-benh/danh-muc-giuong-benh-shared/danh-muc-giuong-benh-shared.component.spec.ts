import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucGiuongBenhSharedComponent } from './danh-muc-giuong-benh-shared.component';

describe('DanhMucGiuongBenhSharedComponent', () => {
  let component: DanhMucGiuongBenhSharedComponent;
  let fixture: ComponentFixture<DanhMucGiuongBenhSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhMucGiuongBenhSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucGiuongBenhSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
