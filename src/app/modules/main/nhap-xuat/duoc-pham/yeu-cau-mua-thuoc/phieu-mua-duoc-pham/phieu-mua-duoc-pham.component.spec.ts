import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuMuaDuocPhamComponent } from './phieu-mua-duoc-pham.component';

describe('PhieuMuaDuocPhamComponent', () => {
  let component: PhieuMuaDuocPhamComponent;
  let fixture: ComponentFixture<PhieuMuaDuocPhamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuMuaDuocPhamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuMuaDuocPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
