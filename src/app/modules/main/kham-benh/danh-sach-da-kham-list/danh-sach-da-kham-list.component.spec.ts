import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachDaKhamListComponent } from './danh-sach-da-kham-list.component';

describe('DanhSachDaKhamListComponent', () => {
  let component: DanhSachDaKhamListComponent;
  let fixture: ComponentFixture<DanhSachDaKhamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachDaKhamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachDaKhamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
