import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachChoKhamPdfComponent } from './danh-sach-cho-kham-pdf.component';

describe('DanhSachChoKhamPdfComponent', () => {
  let component: DanhSachChoKhamPdfComponent;
  let fixture: ComponentFixture<DanhSachChoKhamPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachChoKhamPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachChoKhamPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
