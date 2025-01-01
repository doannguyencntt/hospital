import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMarketingTiepNhanBenhNhanComponent } from './popup-marketing-tiep-nhan-benh-nhan.component';

describe('PopupMarketingTiepNhanBenhNhanComponent', () => {
  let component: PopupMarketingTiepNhanBenhNhanComponent;
  let fixture: ComponentFixture<PopupMarketingTiepNhanBenhNhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupMarketingTiepNhanBenhNhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupMarketingTiepNhanBenhNhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
