import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaoPhieuLinhVatTuThuongComponent } from './tao-phieu-linh-vat-tu-thuong.component';

describe('TaoPhieuLinhVatTuThuongComponent', () => {
  let component: TaoPhieuLinhVatTuThuongComponent;
  let fixture: ComponentFixture<TaoPhieuLinhVatTuThuongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaoPhieuLinhVatTuThuongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaoPhieuLinhVatTuThuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
