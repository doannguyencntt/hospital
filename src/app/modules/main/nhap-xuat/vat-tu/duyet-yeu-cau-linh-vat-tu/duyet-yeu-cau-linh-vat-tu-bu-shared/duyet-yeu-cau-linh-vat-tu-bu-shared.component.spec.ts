import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetYeuCauLinhVatTuBuSharedComponent } from './duyet-yeu-cau-linh-vat-tu-bu-shared.component';

describe('DuyetYeuCauLinhVatTuBuSharedComponent', () => {
  let component: DuyetYeuCauLinhVatTuBuSharedComponent;
  let fixture: ComponentFixture<DuyetYeuCauLinhVatTuBuSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuyetYeuCauLinhVatTuBuSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyetYeuCauLinhVatTuBuSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
