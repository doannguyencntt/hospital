import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucChuanDoanListComponent } from './danh-muc-chuan-doan-list.component';

describe('DanhMucChuanDoanListComponent', () => {
  let component: DanhMucChuanDoanListComponent;
  let fixture: ComponentFixture<DanhMucChuanDoanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhMucChuanDoanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucChuanDoanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
