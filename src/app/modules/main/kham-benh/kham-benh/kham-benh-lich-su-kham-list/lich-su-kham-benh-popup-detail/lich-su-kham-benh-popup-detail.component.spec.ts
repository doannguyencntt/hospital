import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuKhamBenhPopupDetailComponent } from './lich-su-kham-benh-popup-detail.component';

describe('LichSuKhamBenhPopupDetailComponent', () => {
  let component: LichSuKhamBenhPopupDetailComponent;
  let fixture: ComponentFixture<LichSuKhamBenhPopupDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuKhamBenhPopupDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuKhamBenhPopupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
