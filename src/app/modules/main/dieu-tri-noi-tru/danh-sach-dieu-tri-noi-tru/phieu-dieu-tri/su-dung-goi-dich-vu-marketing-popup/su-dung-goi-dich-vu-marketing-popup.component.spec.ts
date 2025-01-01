import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuDungGoiDichVuMarketingPopupComponent } from './su-dung-goi-dich-vu-marketing-popup.component';

describe('SuDungGoiDichVuMarketingPopupComponent', () => {
  let component: SuDungGoiDichVuMarketingPopupComponent;
  let fixture: ComponentFixture<SuDungGoiDichVuMarketingPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuDungGoiDichVuMarketingPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuDungGoiDichVuMarketingPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
