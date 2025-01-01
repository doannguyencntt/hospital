import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetYeuCauLinhThuocThuongSharedComponent } from './duyet-yeu-cau-linh-thuoc-thuong-shared.component';

describe('DuyetYeuCauLinhThuocThuongSharedComponent', () => {
  let component: DuyetYeuCauLinhThuocThuongSharedComponent;
  let fixture: ComponentFixture<DuyetYeuCauLinhThuocThuongSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuyetYeuCauLinhThuocThuongSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyetYeuCauLinhThuocThuongSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
