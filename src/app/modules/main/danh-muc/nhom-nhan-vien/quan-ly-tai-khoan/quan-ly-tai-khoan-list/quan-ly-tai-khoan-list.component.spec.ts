import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyTaiKhoanListComponent } from './quan-ly-tai-khoan-list.component';

describe('QuanLyTaiKhoanListComponent', () => {
  let component: QuanLyTaiKhoanListComponent;
  let fixture: ComponentFixture<QuanLyTaiKhoanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyTaiKhoanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyTaiKhoanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
