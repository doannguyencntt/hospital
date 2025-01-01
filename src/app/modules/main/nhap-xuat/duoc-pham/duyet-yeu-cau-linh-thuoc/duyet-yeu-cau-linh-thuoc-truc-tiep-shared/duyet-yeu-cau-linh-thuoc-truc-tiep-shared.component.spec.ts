import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetYeuCauLinhThuocTrucTiepSharedComponent } from './duyet-yeu-cau-linh-thuoc-truc-tiep-shared.component';

describe('DuyetYeuCauLinhThuocTrucTiepSharedComponent', () => {
  let component: DuyetYeuCauLinhThuocTrucTiepSharedComponent;
  let fixture: ComponentFixture<DuyetYeuCauLinhThuocTrucTiepSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuyetYeuCauLinhThuocTrucTiepSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyetYeuCauLinhThuocTrucTiepSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
