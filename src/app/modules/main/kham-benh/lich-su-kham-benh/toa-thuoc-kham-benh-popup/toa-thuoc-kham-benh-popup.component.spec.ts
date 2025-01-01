import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToaThuocKhamBenhPopupComponent } from './toa-thuoc-kham-benh-popup.component';

describe('ToaThuocKhamBenhPopupComponent', () => {
  let component: ToaThuocKhamBenhPopupComponent;
  let fixture: ComponentFixture<ToaThuocKhamBenhPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToaThuocKhamBenhPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToaThuocKhamBenhPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
