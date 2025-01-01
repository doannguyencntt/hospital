import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyGiuongBenhKhoaComponent } from './quan-ly-giuong-benh-khoa.component';

describe('QuanLyGiuongBenhKhoaComponent', () => {
  let component: QuanLyGiuongBenhKhoaComponent;
  let fixture: ComponentFixture<QuanLyGiuongBenhKhoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyGiuongBenhKhoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyGiuongBenhKhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
