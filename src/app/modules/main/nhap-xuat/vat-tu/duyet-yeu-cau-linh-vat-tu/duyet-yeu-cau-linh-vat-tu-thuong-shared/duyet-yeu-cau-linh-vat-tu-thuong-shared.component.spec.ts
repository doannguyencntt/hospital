import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetYeuCauLinhVatTuThuongSharedComponent } from './duyet-yeu-cau-linh-vat-tu-thuong-shared.component';

describe('DuyetYeuCauLinhVatTuThuongSharedComponent', () => {
  let component: DuyetYeuCauLinhVatTuThuongSharedComponent;
  let fixture: ComponentFixture<DuyetYeuCauLinhVatTuThuongSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuyetYeuCauLinhVatTuThuongSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyetYeuCauLinhVatTuThuongSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
