import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucGiuongBenhListComponent } from './danh-muc-giuong-benh-list.component';

describe('DanhMucGiuongBenhListComponent', () => {
  let component: DanhMucGiuongBenhListComponent;
  let fixture: ComponentFixture<DanhMucGiuongBenhListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhMucGiuongBenhListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucGiuongBenhListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
