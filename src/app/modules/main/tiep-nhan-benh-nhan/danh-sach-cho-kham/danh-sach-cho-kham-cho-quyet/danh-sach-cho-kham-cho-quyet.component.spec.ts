import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachChoKhamChoQuyetComponent } from './danh-sach-cho-kham-cho-quyet.component';

describe('DanhSachChoKhamChoQuyetComponent', () => {
  let component: DanhSachChoKhamChoQuyetComponent;
  let fixture: ComponentFixture<DanhSachChoKhamChoQuyetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachChoKhamChoQuyetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachChoKhamChoQuyetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
