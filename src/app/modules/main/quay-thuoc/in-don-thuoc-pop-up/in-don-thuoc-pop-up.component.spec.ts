import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InDonThuocPopUpComponent } from './in-don-thuoc-pop-up.component';

describe('InDonThuocPopUpComponent', () => {
  let component: InDonThuocPopUpComponent;
  let fixture: ComponentFixture<InDonThuocPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InDonThuocPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InDonThuocPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
