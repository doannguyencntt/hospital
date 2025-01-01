import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinhMucDuocPhamTonKhoCreateComponent } from './dinh-muc-duoc-pham-ton-kho-create.component';

describe('DinhMucDuocPhamTonKhoCreateComponent', () => {
  let component: DinhMucDuocPhamTonKhoCreateComponent;
  let fixture: ComponentFixture<DinhMucDuocPhamTonKhoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinhMucDuocPhamTonKhoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinhMucDuocPhamTonKhoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
