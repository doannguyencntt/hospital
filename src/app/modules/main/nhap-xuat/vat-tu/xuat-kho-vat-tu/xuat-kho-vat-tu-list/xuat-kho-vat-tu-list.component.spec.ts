import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XuatKhoVatTuListComponent } from './xuat-kho-vat-tu-list.component';

describe('XuatKhoVatTuListComponent', () => {
  let component: XuatKhoVatTuListComponent;
  let fixture: ComponentFixture<XuatKhoVatTuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuatKhoVatTuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuatKhoVatTuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
