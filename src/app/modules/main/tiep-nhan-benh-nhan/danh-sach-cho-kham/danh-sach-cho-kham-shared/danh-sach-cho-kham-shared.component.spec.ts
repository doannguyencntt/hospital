import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachChoKhamSharedComponent } from './danh-sach-cho-kham-shared.component';

describe('DanhSachChoKhamSharedComponent', () => {
  let component: DanhSachChoKhamSharedComponent;
  let fixture: ComponentFixture<DanhSachChoKhamSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachChoKhamSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachChoKhamSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
