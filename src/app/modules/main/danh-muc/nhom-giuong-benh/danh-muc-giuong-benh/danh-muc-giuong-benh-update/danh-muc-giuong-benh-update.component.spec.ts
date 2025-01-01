import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucGiuongBenhUpdateComponent } from './danh-muc-giuong-benh-update.component';

describe('DanhMucGiuongBenhUpdateComponent', () => {
  let component: DanhMucGiuongBenhUpdateComponent;
  let fixture: ComponentFixture<DanhMucGiuongBenhUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhMucGiuongBenhUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucGiuongBenhUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
