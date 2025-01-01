import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtttClsKqPopupComponent } from './pttt-cls-kq-popup.component';

describe('PtttClsKqPopupComponent', () => {
  let component: PtttClsKqPopupComponent;
  let fixture: ComponentFixture<PtttClsKqPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtttClsKqPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtttClsKqPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
