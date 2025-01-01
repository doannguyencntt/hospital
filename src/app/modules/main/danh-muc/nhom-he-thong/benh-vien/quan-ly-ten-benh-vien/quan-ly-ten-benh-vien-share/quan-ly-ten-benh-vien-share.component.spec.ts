import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyTenBenhVienShareComponent } from './quan-ly-ten-benh-vien-share.component';

describe('QuanLyTenBenhVienShareComponent', () => {
  let component: QuanLyTenBenhVienShareComponent;
  let fixture: ComponentFixture<QuanLyTenBenhVienShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyTenBenhVienShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyTenBenhVienShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
