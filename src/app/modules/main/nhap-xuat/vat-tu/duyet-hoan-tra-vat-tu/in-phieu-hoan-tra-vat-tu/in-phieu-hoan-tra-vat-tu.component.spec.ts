import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InPhieuHoanTraVatTuComponent } from './in-phieu-hoan-tra-vat-tu.component';

describe('InPhieuHoanTraVatTuComponent', () => {
  let component: InPhieuHoanTraVatTuComponent;
  let fixture: ComponentFixture<InPhieuHoanTraVatTuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InPhieuHoanTraVatTuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InPhieuHoanTraVatTuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
