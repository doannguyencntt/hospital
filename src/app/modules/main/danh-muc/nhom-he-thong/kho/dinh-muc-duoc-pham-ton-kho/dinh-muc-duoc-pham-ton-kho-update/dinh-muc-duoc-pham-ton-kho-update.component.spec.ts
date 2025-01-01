import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinhMucDuocPhamTonKhoUpdateComponent } from './dinh-muc-duoc-pham-ton-kho-update.component';

describe('DinhMucDuocPhamTonKhoUpdateComponent', () => {
  let component: DinhMucDuocPhamTonKhoUpdateComponent;
  let fixture: ComponentFixture<DinhMucDuocPhamTonKhoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinhMucDuocPhamTonKhoUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinhMucDuocPhamTonKhoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
