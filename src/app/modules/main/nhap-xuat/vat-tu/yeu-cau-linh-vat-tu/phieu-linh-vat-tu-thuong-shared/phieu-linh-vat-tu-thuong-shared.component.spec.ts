import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuLinhVatTuThuongSharedComponent } from './phieu-linh-vat-tu-thuong-shared.component';

describe('PhieuLinhVatTuThuongSharedComponent', () => {
  let component: PhieuLinhVatTuThuongSharedComponent;
  let fixture: ComponentFixture<PhieuLinhVatTuThuongSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuLinhVatTuThuongSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuLinhVatTuThuongSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
