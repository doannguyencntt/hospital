import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XuatKhoVatTuUpdateComponent } from './xuat-kho-vat-tu-update.component';

describe('XuatKhoVatTuUpdateComponent', () => {
  let component: XuatKhoVatTuUpdateComponent;
  let fixture: ComponentFixture<XuatKhoVatTuUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuatKhoVatTuUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuatKhoVatTuUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
