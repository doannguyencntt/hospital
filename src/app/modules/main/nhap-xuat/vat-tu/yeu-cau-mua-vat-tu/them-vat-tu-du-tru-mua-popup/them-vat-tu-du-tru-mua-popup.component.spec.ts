import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemVatTuDuTruMuaPopupComponent } from './them-vat-tu-du-tru-mua-popup.component';

describe('ThemVatTuDuTruMuaPopupComponent', () => {
  let component: ThemVatTuDuTruMuaPopupComponent;
  let fixture: ComponentFixture<ThemVatTuDuTruMuaPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemVatTuDuTruMuaPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemVatTuDuTruMuaPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
