import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachChoKhamCreateComponent } from './danh-sach-cho-kham-create.component';

describe('DanhSachChoKhamCreateComponent', () => {
  let component: DanhSachChoKhamCreateComponent;
  let fixture: ComponentFixture<DanhSachChoKhamCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachChoKhamCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachChoKhamCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
