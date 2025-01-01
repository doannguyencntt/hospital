import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuLinhVatTuTrucTiepGuiLaiComponent } from './phieu-linh-vat-tu-truc-tiep-gui-lai.component';

describe('PhieuLinhVatTuTrucTiepGuiLaiComponent', () => {
  let component: PhieuLinhVatTuTrucTiepGuiLaiComponent;
  let fixture: ComponentFixture<PhieuLinhVatTuTrucTiepGuiLaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuLinhVatTuTrucTiepGuiLaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuLinhVatTuTrucTiepGuiLaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
