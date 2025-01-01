import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetYeuCauLinhVatTuTrucTiepSharedComponent } from './duyet-yeu-cau-linh-vat-tu-truc-tiep-shared.component';

describe('DuyetYeuCauLinhVatTuTrucTiepSharedComponent', () => {
  let component: DuyetYeuCauLinhVatTuTrucTiepSharedComponent;
  let fixture: ComponentFixture<DuyetYeuCauLinhVatTuTrucTiepSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuyetYeuCauLinhVatTuTrucTiepSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyetYeuCauLinhVatTuTrucTiepSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
