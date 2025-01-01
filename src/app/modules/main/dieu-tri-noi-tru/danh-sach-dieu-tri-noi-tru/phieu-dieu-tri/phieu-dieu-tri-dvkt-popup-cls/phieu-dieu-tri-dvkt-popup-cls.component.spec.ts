import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuDieuTriDvktPopupClsComponent } from './phieu-dieu-tri-dvkt-popup-cls.component';

describe('PhieuDieuTriDvktPopupClsComponent', () => {
  let component: PhieuDieuTriDvktPopupClsComponent;
  let fixture: ComponentFixture<PhieuDieuTriDvktPopupClsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuDieuTriDvktPopupClsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuDieuTriDvktPopupClsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
