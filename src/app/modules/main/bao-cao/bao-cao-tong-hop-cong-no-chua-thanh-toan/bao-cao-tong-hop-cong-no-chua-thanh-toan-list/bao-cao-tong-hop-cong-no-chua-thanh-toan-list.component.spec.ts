import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoTongHopCongNoChuaThanhToanListComponent } from './bao-cao-tong-hop-cong-no-chua-thanh-toan-list.component';

describe('BaoCaoTongHopCongNoChuaThanhToanListComponent', () => {
  let component: BaoCaoTongHopCongNoChuaThanhToanListComponent;
  let fixture: ComponentFixture<BaoCaoTongHopCongNoChuaThanhToanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoTongHopCongNoChuaThanhToanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoTongHopCongNoChuaThanhToanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
