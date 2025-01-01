import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaVatTuPopupComponent } from './sua-vat-tu-popup.component';

describe('SuaVatTuPopupComponent', () => {
  let component: SuaVatTuPopupComponent;
  let fixture: ComponentFixture<SuaVatTuPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaVatTuPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaVatTuPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
