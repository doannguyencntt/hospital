import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinhMucDuocPhamTonKhoListComponent } from './dinh-muc-duoc-pham-ton-kho-list.component';

describe('DinhMucDuocPhamTonKhoListComponent', () => {
  let component: DinhMucDuocPhamTonKhoListComponent;
  let fixture: ComponentFixture<DinhMucDuocPhamTonKhoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinhMucDuocPhamTonKhoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinhMucDuocPhamTonKhoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
