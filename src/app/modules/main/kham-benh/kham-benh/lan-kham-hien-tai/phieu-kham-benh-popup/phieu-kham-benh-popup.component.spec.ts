import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuKhamBenhPopupComponent } from './phieu-kham-benh-popup.component';

describe('PhieuKhamBenhPopupComponent', () => {
  let component: PhieuKhamBenhPopupComponent;
  let fixture: ComponentFixture<PhieuKhamBenhPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuKhamBenhPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuKhamBenhPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
