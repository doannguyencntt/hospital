import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinVatTuYTePopupComponent } from './thong-tin-vat-tu-y-te-popup.component';

describe('ThongTinVatTuYTePopupComponent', () => {
  let component: ThongTinVatTuYTePopupComponent;
  let fixture: ComponentFixture<ThongTinVatTuYTePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinVatTuYTePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinVatTuYTePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
