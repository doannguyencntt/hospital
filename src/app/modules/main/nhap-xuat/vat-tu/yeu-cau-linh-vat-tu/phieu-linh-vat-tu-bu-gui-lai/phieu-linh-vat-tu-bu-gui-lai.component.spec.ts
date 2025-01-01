import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuLinhVatTuBuGuiLaiComponent } from './phieu-linh-vat-tu-bu-gui-lai.component';

describe('PhieuLinhVatTuBuGuiLaiComponent', () => {
  let component: PhieuLinhVatTuBuGuiLaiComponent;
  let fixture: ComponentFixture<PhieuLinhVatTuBuGuiLaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuLinhVatTuBuGuiLaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuLinhVatTuBuGuiLaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
