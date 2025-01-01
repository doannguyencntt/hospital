import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucChuanDoanUpdateComponent } from './danh-muc-chuan-doan-update.component';

describe('DanhMucChuanDoanUpdateComponent', () => {
  let component: DanhMucChuanDoanUpdateComponent;
  let fixture: ComponentFixture<DanhMucChuanDoanUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhMucChuanDoanUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucChuanDoanUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
