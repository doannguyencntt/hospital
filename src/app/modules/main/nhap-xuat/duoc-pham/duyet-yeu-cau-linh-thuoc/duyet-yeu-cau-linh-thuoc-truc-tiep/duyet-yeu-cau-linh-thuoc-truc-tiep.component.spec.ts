import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetYeuCauLinhThuocTrucTiepComponent } from './duyet-yeu-cau-linh-thuoc-truc-tiep.component';

describe('DuyetYeuCauLinhThuocTrucTiepComponent', () => {
  let component: DuyetYeuCauLinhThuocTrucTiepComponent;
  let fixture: ComponentFixture<DuyetYeuCauLinhThuocTrucTiepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuyetYeuCauLinhThuocTrucTiepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyetYeuCauLinhThuocTrucTiepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
