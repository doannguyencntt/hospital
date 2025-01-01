import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetHoanTraVatTuChiTietComponent } from './duyet-hoan-tra-vat-tu-chi-tiet.component';

describe('DuyetHoanTraVatTuChiTietComponent', () => {
  let component: DuyetHoanTraVatTuChiTietComponent;
  let fixture: ComponentFixture<DuyetHoanTraVatTuChiTietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuyetHoanTraVatTuChiTietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyetHoanTraVatTuChiTietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
