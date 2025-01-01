import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuLinhVatTuBuGuiLaiSharedComponent } from './phieu-linh-vat-tu-bu-gui-lai-shared.component';

describe('PhieuLinhVatTuBuGuiLaiSharedComponent', () => {
  let component: PhieuLinhVatTuBuGuiLaiSharedComponent;
  let fixture: ComponentFixture<PhieuLinhVatTuBuGuiLaiSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuLinhVatTuBuGuiLaiSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuLinhVatTuBuGuiLaiSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
