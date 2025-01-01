import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViTriKhoDuocPhamCreateComponent } from './vi-tri-kho-duoc-pham-create.component';

describe('ViTriKhoDuocPhamCreateComponent', () => {
  let component: ViTriKhoDuocPhamCreateComponent;
  let fixture: ComponentFixture<ViTriKhoDuocPhamCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViTriKhoDuocPhamCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViTriKhoDuocPhamCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
