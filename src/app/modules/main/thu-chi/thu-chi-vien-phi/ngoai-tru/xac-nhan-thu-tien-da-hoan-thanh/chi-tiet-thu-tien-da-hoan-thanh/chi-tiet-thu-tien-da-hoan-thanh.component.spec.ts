import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietThuTienDaHoanThanhComponent } from './chi-tiet-thu-tien-da-hoan-thanh.component';

describe('ChiTietThuTienDaHoanThanhComponent', () => {
  let component: ChiTietThuTienDaHoanThanhComponent;
  let fixture: ComponentFixture<ChiTietThuTienDaHoanThanhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietThuTienDaHoanThanhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietThuTienDaHoanThanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
