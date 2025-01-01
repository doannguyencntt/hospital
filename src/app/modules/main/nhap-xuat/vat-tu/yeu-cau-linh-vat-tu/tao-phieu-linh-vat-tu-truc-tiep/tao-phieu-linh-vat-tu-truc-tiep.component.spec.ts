import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaoPhieuLinhVatTuTrucTiepComponent } from './tao-phieu-linh-vat-tu-truc-tiep.component';

describe('TaoPhieuLinhVatTuTrucTiepComponent', () => {
  let component: TaoPhieuLinhVatTuTrucTiepComponent;
  let fixture: ComponentFixture<TaoPhieuLinhVatTuTrucTiepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaoPhieuLinhVatTuTrucTiepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaoPhieuLinhVatTuTrucTiepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
