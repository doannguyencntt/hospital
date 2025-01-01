import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetYeuCauLinhThuocThuongComponent } from './duyet-yeu-cau-linh-thuoc-thuong.component';

describe('DuyetYeuCauLinhThuocThuongComponent', () => {
  let component: DuyetYeuCauLinhThuocThuongComponent;
  let fixture: ComponentFixture<DuyetYeuCauLinhThuocThuongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuyetYeuCauLinhThuocThuongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyetYeuCauLinhThuocThuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
