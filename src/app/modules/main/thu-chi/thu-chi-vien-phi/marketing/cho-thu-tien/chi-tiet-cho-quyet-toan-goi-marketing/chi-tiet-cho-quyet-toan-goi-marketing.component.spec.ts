import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChiTietChoQuyetToanMarketing } from './chi-tiet-cho-quyet-toan-goi-marketing.component';

describe('ChiTietChoQuyetToanMarketing', () => {
  let component: ChiTietChoQuyetToanMarketing;
  let fixture: ComponentFixture<ChiTietChoQuyetToanMarketing>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietChoQuyetToanMarketing ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietChoQuyetToanMarketing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
