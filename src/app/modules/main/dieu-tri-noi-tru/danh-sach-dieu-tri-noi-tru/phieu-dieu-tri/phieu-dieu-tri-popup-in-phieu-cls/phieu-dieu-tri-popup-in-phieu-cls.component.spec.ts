import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuDieuTriPopupInPhieuClsComponent } from './phieu-dieu-tri-popup-in-phieu-cls.component';

describe('PhieuDieuTriPopupInPhieuClsComponent', () => {
  let component: PhieuDieuTriPopupInPhieuClsComponent;
  let fixture: ComponentFixture<PhieuDieuTriPopupInPhieuClsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuDieuTriPopupInPhieuClsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuDieuTriPopupInPhieuClsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
