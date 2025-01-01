import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetYeuCauLinhVatTuBuComponent } from './duyet-yeu-cau-linh-vat-tu-bu.component';

describe('DuyetYeuCauLinhVatTuBuComponent', () => {
  let component: DuyetYeuCauLinhVatTuBuComponent;
  let fixture: ComponentFixture<DuyetYeuCauLinhVatTuBuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuyetYeuCauLinhVatTuBuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyetYeuCauLinhVatTuBuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
