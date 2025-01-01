import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucChuanDoanCreateComponent } from './danh-muc-chuan-doan-create.component';

describe('DanhMucChuanDoanCreateComponent', () => {
  let component: DanhMucChuanDoanCreateComponent;
  let fixture: ComponentFixture<DanhMucChuanDoanCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhMucChuanDoanCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucChuanDoanCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
