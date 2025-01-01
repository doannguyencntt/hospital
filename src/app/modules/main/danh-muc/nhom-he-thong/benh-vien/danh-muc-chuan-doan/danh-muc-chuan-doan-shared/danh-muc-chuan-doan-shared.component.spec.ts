import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucChuanDoanSharedComponent } from './danh-muc-chuan-doan-shared.component';

describe('DanhMucChuanDoanSharedComponent', () => {
  let component: DanhMucChuanDoanSharedComponent;
  let fixture: ComponentFixture<DanhMucChuanDoanSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhMucChuanDoanSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucChuanDoanSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
