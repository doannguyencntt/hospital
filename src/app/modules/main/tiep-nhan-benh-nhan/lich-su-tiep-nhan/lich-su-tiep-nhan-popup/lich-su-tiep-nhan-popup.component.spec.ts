import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuTiepNhanPopupComponent } from './lich-su-tiep-nhan-popup.component';

describe('LichSuTiepNhanPopupComponent', () => {
  let component: LichSuTiepNhanPopupComponent;
  let fixture: ComponentFixture<LichSuTiepNhanPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuTiepNhanPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuTiepNhanPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
