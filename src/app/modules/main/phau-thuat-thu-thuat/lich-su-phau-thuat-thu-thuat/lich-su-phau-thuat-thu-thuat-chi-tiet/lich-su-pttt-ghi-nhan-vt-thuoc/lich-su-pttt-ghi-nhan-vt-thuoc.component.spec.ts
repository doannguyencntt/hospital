import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuPtttGhiNhanVtThuocComponent } from './lich-su-pttt-ghi-nhan-vt-thuoc.component';

describe('LichSuPtttGhiNhanVtThuocComponent', () => {
  let component: LichSuPtttGhiNhanVtThuocComponent;
  let fixture: ComponentFixture<LichSuPtttGhiNhanVtThuocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuPtttGhiNhanVtThuocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuPtttGhiNhanVtThuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
