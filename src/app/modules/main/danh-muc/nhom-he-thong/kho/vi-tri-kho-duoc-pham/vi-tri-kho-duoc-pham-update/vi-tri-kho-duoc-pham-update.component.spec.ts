import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViTriKhoDuocPhamUpdateComponent } from './vi-tri-kho-duoc-pham-update.component';

describe('ViTriKhoDuocPhamUpdateComponent', () => {
  let component: ViTriKhoDuocPhamUpdateComponent;
  let fixture: ComponentFixture<ViTriKhoDuocPhamUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViTriKhoDuocPhamUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViTriKhoDuocPhamUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
