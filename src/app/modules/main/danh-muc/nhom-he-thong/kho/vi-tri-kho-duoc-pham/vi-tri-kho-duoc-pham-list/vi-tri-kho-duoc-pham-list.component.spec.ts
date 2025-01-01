import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViTriKhoDuocPhamListComponent } from './vi-tri-kho-duoc-pham-list.component';

describe('ViTriKhoDuocPhamListComponent', () => {
  let component: ViTriKhoDuocPhamListComponent;
  let fixture: ComponentFixture<ViTriKhoDuocPhamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViTriKhoDuocPhamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViTriKhoDuocPhamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
