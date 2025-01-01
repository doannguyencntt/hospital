import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetHoanTraVatTuListComponent } from './duyet-hoan-tra-vat-tu-list.component';

describe('DuyetHoanTraVatTuListComponent', () => {
  let component: DuyetHoanTraVatTuListComponent;
  let fixture: ComponentFixture<DuyetHoanTraVatTuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuyetHoanTraVatTuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyetHoanTraVatTuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
