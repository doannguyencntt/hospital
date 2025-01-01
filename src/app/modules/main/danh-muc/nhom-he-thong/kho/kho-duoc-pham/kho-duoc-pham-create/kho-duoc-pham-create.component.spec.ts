import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhoDuocPhamCreateComponent } from './kho-duoc-pham-create.component';

describe('KhoDuocPhamCreateComponent', () => {
  let component: KhoDuocPhamCreateComponent;
  let fixture: ComponentFixture<KhoDuocPhamCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhoDuocPhamCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhoDuocPhamCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
