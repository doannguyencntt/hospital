import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyGiuongBenhComponent } from './quan-ly-giuong-benh.component';

describe('QuanLyGiuongBenhComponent', () => {
  let component: QuanLyGiuongBenhComponent;
  let fixture: ComponentFixture<QuanLyGiuongBenhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyGiuongBenhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyGiuongBenhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
