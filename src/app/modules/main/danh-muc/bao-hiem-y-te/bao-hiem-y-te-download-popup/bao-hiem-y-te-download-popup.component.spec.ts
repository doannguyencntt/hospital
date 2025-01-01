import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoHiemYTeDownloadPopupComponent } from './bao-hiem-y-te-download-popup.component';

describe('BaoHiemYTeDownloadPopupComponent', () => {
  let component: BaoHiemYTeDownloadPopupComponent;
  let fixture: ComponentFixture<BaoHiemYTeDownloadPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoHiemYTeDownloadPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoHiemYTeDownloadPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
