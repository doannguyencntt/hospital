import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucGiuongBenhCreateComponent } from './danh-muc-giuong-benh-create.component';

describe('DanhMucGiuongBenhCreateComponent', () => {
  let component: DanhMucGiuongBenhCreateComponent;
  let fixture: ComponentFixture<DanhMucGiuongBenhCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhMucGiuongBenhCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucGiuongBenhCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
