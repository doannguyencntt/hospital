import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DanhSachGoiMarketing } from './danh-sach-cho-thu-tien-goi-marketing.component';

describe('DanhSachGoiMarketing', () => {
  let component: DanhSachGoiMarketing;
  let fixture: ComponentFixture<DanhSachGoiMarketing>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachGoiMarketing ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachGoiMarketing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
