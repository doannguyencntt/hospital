import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NghiHuongBhxhTiepNhanPopupComponent } from './nghi-huong-bhxh-tiep-nhan-popup.component';

describe('NghiHuongBhxhTiepNhanPopupComponent', () => {
  let component: NghiHuongBhxhTiepNhanPopupComponent;
  let fixture: ComponentFixture<NghiHuongBhxhTiepNhanPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NghiHuongBhxhTiepNhanPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NghiHuongBhxhTiepNhanPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
