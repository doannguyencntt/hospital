import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachChoKhamListComponent } from './danh-sach-cho-kham-list.component';

describe('DanhSachChoKhamListComponent', () => {
  let component: DanhSachChoKhamListComponent;
  let fixture: ComponentFixture<DanhSachChoKhamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachChoKhamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachChoKhamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
