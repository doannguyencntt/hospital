import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietDieuTriPopupComponent } from './chi-tiet-dieu-tri-popup.component';

describe('ChiTietDieuTriPopupComponent', () => {
  let component: ChiTietDieuTriPopupComponent;
  let fixture: ComponentFixture<ChiTietDieuTriPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietDieuTriPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietDieuTriPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
