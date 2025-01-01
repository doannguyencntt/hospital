import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhomVatTuListComponent } from './nhom-vat-tu-list.component';

describe('NhomVatTuListComponent', () => {
  let component: NhomVatTuListComponent;
  let fixture: ComponentFixture<NhomVatTuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhomVatTuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhomVatTuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
