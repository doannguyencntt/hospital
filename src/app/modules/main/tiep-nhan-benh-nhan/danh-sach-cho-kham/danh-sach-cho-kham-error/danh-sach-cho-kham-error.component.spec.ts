import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachChoKhamErrorComponent } from './danh-sach-cho-kham-error.component';

describe('DanhSachChoKhamErrorComponent', () => {
  let component: DanhSachChoKhamErrorComponent;
  let fixture: ComponentFixture<DanhSachChoKhamErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachChoKhamErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachChoKhamErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
