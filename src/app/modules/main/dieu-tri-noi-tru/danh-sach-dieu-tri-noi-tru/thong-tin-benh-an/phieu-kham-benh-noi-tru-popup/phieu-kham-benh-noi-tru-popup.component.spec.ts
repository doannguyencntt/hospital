import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuKhamBenhNoiTruPopupComponent } from './phieu-kham-benh-noi-tru-popup.component';

describe('PhieuKhamBenhNoiTruPopupComponent', () => {
  let component: PhieuKhamBenhNoiTruPopupComponent;
  let fixture: ComponentFixture<PhieuKhamBenhNoiTruPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuKhamBenhNoiTruPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuKhamBenhNoiTruPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
