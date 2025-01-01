import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetYeuCauLinhVatTuThuongComponent } from './duyet-yeu-cau-linh-vat-tu-thuong.component';

describe('DuyetYeuCauLinhVatTuThuongComponent', () => {
  let component: DuyetYeuCauLinhVatTuThuongComponent;
  let fixture: ComponentFixture<DuyetYeuCauLinhVatTuThuongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuyetYeuCauLinhVatTuThuongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyetYeuCauLinhVatTuThuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
