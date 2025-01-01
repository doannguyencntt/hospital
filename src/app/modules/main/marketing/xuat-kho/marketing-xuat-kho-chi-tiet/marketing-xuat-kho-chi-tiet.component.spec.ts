import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingXuatKhoChiTietComponent } from './marketing-xuat-kho-chi-tiet.component';

describe('MarketingXuatKhoChiTietComponent', () => {
  let component: MarketingXuatKhoChiTietComponent;
  let fixture: ComponentFixture<MarketingXuatKhoChiTietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingXuatKhoChiTietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingXuatKhoChiTietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
