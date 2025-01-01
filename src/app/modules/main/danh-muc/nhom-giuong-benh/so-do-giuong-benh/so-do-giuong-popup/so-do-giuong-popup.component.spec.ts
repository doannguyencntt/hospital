import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoDoGiuongPopupComponent } from './so-do-giuong-popup.component';

describe('SoDoGiuongPopupComponent', () => {
  let component: SoDoGiuongPopupComponent;
  let fixture: ComponentFixture<SoDoGiuongPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoDoGiuongPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoDoGiuongPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
