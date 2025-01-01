import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuHinhAnhClsPopupComponent } from './lich-su-hinh-anh-cls-popup.component';

describe('LichSuHinhAnhClsPopupComponent', () => {
  let component: LichSuHinhAnhClsPopupComponent;
  let fixture: ComponentFixture<LichSuHinhAnhClsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuHinhAnhClsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuHinhAnhClsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
