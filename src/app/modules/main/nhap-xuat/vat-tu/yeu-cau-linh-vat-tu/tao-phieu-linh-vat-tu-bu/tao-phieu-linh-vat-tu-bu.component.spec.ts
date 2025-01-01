import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaoPhieuLinhVatTuBuComponent } from './tao-phieu-linh-vat-tu-bu.component';

describe('TaoPhieuLinhVatTuBuComponent', () => {
  let component: TaoPhieuLinhVatTuBuComponent;
  let fixture: ComponentFixture<TaoPhieuLinhVatTuBuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaoPhieuLinhVatTuBuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaoPhieuLinhVatTuBuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
