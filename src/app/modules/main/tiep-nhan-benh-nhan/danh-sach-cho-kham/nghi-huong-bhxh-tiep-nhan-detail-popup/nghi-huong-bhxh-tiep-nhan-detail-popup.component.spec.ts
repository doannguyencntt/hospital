import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NghiHuongBhxhTiepNhanDetailPopupComponent } from './nghi-huong-bhxh-tiep-nhan-detail-popup.component';

describe('NghiHuongBhxhTiepNhanDetailPopupComponent', () => {
  let component: NghiHuongBhxhTiepNhanDetailPopupComponent;
  let fixture: ComponentFixture<NghiHuongBhxhTiepNhanDetailPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NghiHuongBhxhTiepNhanDetailPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NghiHuongBhxhTiepNhanDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
