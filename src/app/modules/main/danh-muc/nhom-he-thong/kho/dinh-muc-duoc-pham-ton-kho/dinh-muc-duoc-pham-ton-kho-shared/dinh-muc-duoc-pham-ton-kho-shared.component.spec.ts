import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinhMucDuocPhamTonKhoSharedComponent } from './dinh-muc-duoc-pham-ton-kho-shared.component';

describe('DinhMucDuocPhamTonKhoSharedComponent', () => {
  let component: DinhMucDuocPhamTonKhoSharedComponent;
  let fixture: ComponentFixture<DinhMucDuocPhamTonKhoSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinhMucDuocPhamTonKhoSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinhMucDuocPhamTonKhoSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
