import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyGiuongBenhPhongComponent } from './quan-ly-giuong-benh-phong.component';

describe('QuanLyGiuongBenhPhongComponent', () => {
  let component: QuanLyGiuongBenhPhongComponent;
  let fixture: ComponentFixture<QuanLyGiuongBenhPhongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyGiuongBenhPhongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyGiuongBenhPhongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
