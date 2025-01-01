import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VatTuYTeChonFilePopupComponent } from './vat-tu-y-te-chon-file-popup.component';

describe('VatTuYTeChonFilePopupComponent', () => {
  let component: VatTuYTeChonFilePopupComponent;
  let fixture: ComponentFixture<VatTuYTeChonFilePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VatTuYTeChonFilePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VatTuYTeChonFilePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
