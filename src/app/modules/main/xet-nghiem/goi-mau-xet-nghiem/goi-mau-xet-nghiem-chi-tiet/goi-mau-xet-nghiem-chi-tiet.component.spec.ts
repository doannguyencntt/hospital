import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoiMauXetNghiemChiTietComponent } from './goi-mau-xet-nghiem-chi-tiet.component';

describe('GoiMauXetNghiemChiTietComponent', () => {
  let component: GoiMauXetNghiemChiTietComponent;
  let fixture: ComponentFixture<GoiMauXetNghiemChiTietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoiMauXetNghiemChiTietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoiMauXetNghiemChiTietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
