import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetYeuCauLinhThuocBuSharedComponent } from './duyet-yeu-cau-linh-thuoc-bu-shared.component';

describe('DuyetYeuCauLinhThuocBuSharedComponent', () => {
  let component: DuyetYeuCauLinhThuocBuSharedComponent;
  let fixture: ComponentFixture<DuyetYeuCauLinhThuocBuSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuyetYeuCauLinhThuocBuSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyetYeuCauLinhThuocBuSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
