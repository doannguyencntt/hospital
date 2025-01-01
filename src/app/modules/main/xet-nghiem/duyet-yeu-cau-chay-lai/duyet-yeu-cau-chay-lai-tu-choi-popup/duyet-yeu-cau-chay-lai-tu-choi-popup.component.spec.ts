import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetYeuCauChayLaiTuChoiPopupComponent } from './duyet-yeu-cau-chay-lai-tu-choi-popup.component';

describe('DuyetYeuCauChayLaiTuChoiPopupComponent', () => {
  let component: DuyetYeuCauChayLaiTuChoiPopupComponent;
  let fixture: ComponentFixture<DuyetYeuCauChayLaiTuChoiPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuyetYeuCauChayLaiTuChoiPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyetYeuCauChayLaiTuChoiPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
