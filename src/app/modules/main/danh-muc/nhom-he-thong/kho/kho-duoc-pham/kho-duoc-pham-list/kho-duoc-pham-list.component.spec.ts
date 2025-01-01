import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhoDuocPhamListComponent } from './kho-duoc-pham-list.component';

describe('KhoDuocPhamListComponent', () => {
  let component: KhoDuocPhamListComponent;
  let fixture: ComponentFixture<KhoDuocPhamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhoDuocPhamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhoDuocPhamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
