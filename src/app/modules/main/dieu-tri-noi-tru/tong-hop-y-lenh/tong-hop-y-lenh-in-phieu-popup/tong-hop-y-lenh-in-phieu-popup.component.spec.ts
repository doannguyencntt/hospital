import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongHopYLenhInPhieuPopupComponent } from './tong-hop-y-lenh-in-phieu-popup.component';

describe('TongHopYLenhInPhieuPopupComponent', () => {
  let component: TongHopYLenhInPhieuPopupComponent;
  let fixture: ComponentFixture<TongHopYLenhInPhieuPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongHopYLenhInPhieuPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongHopYLenhInPhieuPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
