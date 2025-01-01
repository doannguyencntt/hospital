import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamDoanThongTinHanhChinhComponent } from './kham-doan-thong-tin-hanh-chinh.component';

describe('KhamDoanThongTinHanhChinhComponent', () => {
  let component: KhamDoanThongTinHanhChinhComponent;
  let fixture: ComponentFixture<KhamDoanThongTinHanhChinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamDoanThongTinHanhChinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamDoanThongTinHanhChinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
