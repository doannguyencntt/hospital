import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuKhamBenhPopupComponent } from './lich-su-kham-benh-popup.component';

describe('LichSuKhamBenhPopupComponent', () => {
  let component: LichSuKhamBenhPopupComponent;
  let fixture: ComponentFixture<LichSuKhamBenhPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuKhamBenhPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuKhamBenhPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
