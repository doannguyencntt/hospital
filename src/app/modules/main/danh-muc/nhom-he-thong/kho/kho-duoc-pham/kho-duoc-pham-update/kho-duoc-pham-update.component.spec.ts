import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhoDuocPhamUpdateComponent } from './kho-duoc-pham-update.component';

describe('KhoDuocPhamUpdateComponent', () => {
  let component: KhoDuocPhamUpdateComponent;
  let fixture: ComponentFixture<KhoDuocPhamUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhoDuocPhamUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhoDuocPhamUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
