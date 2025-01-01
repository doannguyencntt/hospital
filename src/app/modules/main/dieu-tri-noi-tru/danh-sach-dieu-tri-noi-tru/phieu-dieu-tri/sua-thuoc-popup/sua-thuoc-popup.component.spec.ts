import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaThuocPopupComponent } from './sua-thuoc-popup.component';

describe('SuaThuocPopupComponent', () => {
  let component: SuaThuocPopupComponent;
  let fixture: ComponentFixture<SuaThuocPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaThuocPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaThuocPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
