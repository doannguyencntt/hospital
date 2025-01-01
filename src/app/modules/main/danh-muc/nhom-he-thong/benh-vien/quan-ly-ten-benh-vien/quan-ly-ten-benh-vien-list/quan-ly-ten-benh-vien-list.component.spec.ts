import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyTenBenhVienListComponent } from './quan-ly-ten-benh-vien-list.component';

describe('QuanLyTenBenhVienListComponent', () => {
  let component: QuanLyTenBenhVienListComponent;
  let fixture: ComponentFixture<QuanLyTenBenhVienListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyTenBenhVienListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyTenBenhVienListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
