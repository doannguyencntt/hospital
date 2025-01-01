import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiayChungNhanPhauThuatPopupComponent } from './giay-chung-nhan-phau-thuat-popup.component';

describe('GiayChungNhanPhauThuatPopupComponent', () => {
  let component: GiayChungNhanPhauThuatPopupComponent;
  let fixture: ComponentFixture<GiayChungNhanPhauThuatPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiayChungNhanPhauThuatPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiayChungNhanPhauThuatPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
