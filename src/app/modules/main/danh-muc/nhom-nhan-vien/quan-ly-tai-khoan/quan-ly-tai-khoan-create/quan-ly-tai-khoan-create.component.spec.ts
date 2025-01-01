import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyTaiKhoanCreateComponent } from './quan-ly-tai-khoan-create.component';

describe('QuanLyTaiKhoanCreateComponent', () => {
  let component: QuanLyTaiKhoanCreateComponent;
  let fixture: ComponentFixture<QuanLyTaiKhoanCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyTaiKhoanCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyTaiKhoanCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
