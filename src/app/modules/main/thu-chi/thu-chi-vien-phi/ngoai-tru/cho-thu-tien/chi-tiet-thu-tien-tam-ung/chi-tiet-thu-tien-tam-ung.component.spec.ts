import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietThuTienTamUngComponent } from './chi-tiet-thu-tien-tam-ung.component';

describe('ChiTietThuTienTamUngComponent', () => {
  let component: ChiTietThuTienTamUngComponent;
  let fixture: ComponentFixture<ChiTietThuTienTamUngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietThuTienTamUngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietThuTienTamUngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
