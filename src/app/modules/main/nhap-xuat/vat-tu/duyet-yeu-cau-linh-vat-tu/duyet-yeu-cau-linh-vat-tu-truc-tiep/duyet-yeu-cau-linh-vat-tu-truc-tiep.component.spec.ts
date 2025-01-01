import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetYeuCauLinhVatTuTrucTiepComponent } from './duyet-yeu-cau-linh-vat-tu-truc-tiep.component';

describe('DuyetYeuCauLinhVatTuTrucTiepComponent', () => {
  let component: DuyetYeuCauLinhVatTuTrucTiepComponent;
  let fixture: ComponentFixture<DuyetYeuCauLinhVatTuTrucTiepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuyetYeuCauLinhVatTuTrucTiepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyetYeuCauLinhVatTuTrucTiepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
