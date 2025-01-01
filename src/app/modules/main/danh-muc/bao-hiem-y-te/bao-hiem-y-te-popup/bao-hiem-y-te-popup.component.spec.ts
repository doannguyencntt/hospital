import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoHiemYTePopupComponent } from './bao-hiem-y-te-popup.component';

describe('BaoHiemYTePopupComponent', () => {
  let component: BaoHiemYTePopupComponent;
  let fixture: ComponentFixture<BaoHiemYTePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoHiemYTePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoHiemYTePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
