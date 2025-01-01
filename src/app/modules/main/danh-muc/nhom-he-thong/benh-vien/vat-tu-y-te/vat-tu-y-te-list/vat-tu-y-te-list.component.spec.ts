import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VatTuYTeListComponent } from './vat-tu-y-te-list.component';

describe('VatTuYTeListComponent', () => {
  let component: VatTuYTeListComponent;
  let fixture: ComponentFixture<VatTuYTeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VatTuYTeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VatTuYTeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
