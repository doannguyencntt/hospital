import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XuatKhoVatTuCreateComponent } from './xuat-kho-vat-tu-create.component';

describe('XuatKhoVatTuCreateComponent', () => {
  let component: XuatKhoVatTuCreateComponent;
  let fixture: ComponentFixture<XuatKhoVatTuCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuatKhoVatTuCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuatKhoVatTuCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
