import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuLinhVatTuThuongGuiLaiComponent } from './phieu-linh-vat-tu-thuong-gui-lai.component';

describe('PhieuLinhVatTuThuongGuiLaiComponent', () => {
  let component: PhieuLinhVatTuThuongGuiLaiComponent;
  let fixture: ComponentFixture<PhieuLinhVatTuThuongGuiLaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuLinhVatTuThuongGuiLaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuLinhVatTuThuongGuiLaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
