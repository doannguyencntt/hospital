import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenhAnDienTuBenhAnPopupComponent } from './benh-an-dien-tu-benh-an-popup.component';

describe('BenhAnDienTuBenhAnPopupComponent', () => {
  let component: BenhAnDienTuBenhAnPopupComponent;
  let fixture: ComponentFixture<BenhAnDienTuBenhAnPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenhAnDienTuBenhAnPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenhAnDienTuBenhAnPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
