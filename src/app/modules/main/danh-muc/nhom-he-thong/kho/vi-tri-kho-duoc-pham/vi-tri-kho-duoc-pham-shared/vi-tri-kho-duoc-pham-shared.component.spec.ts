import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViTriKhoDuocPhamSharedComponent } from './vi-tri-kho-duoc-pham-shared.component';

describe('ViTriKhoDuocPhamSharedComponent', () => {
  let component: ViTriKhoDuocPhamSharedComponent;
  let fixture: ComponentFixture<ViTriKhoDuocPhamSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViTriKhoDuocPhamSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViTriKhoDuocPhamSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
