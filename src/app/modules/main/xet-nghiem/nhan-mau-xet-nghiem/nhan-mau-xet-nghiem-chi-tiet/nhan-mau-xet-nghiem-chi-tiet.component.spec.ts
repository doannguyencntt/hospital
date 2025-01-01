import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanMauXetNghiemChiTietComponent } from './nhan-mau-xet-nghiem-chi-tiet.component';

describe('NhanMauXetNghiemChiTietComponent', () => {
  let component: NhanMauXetNghiemChiTietComponent;
  let fixture: ComponentFixture<NhanMauXetNghiemChiTietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhanMauXetNghiemChiTietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhanMauXetNghiemChiTietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
