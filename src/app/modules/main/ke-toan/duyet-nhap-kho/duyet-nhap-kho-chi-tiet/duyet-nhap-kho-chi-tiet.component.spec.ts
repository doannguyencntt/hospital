import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetNhapKhoChiTietComponent } from './duyet-nhap-kho-chi-tiet.component';

describe('DuyetNhapKhoChiTietComponent', () => {
  let component: DuyetNhapKhoChiTietComponent;
  let fixture: ComponentFixture<DuyetNhapKhoChiTietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuyetNhapKhoChiTietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyetNhapKhoChiTietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
