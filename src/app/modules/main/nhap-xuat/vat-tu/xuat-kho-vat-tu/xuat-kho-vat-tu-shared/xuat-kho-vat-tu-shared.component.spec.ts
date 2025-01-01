import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XuatKhoVatTuSharedComponent } from './xuat-kho-vat-tu-shared.component';

describe('XuatKhoVatTuSharedComponent', () => {
  let component: XuatKhoVatTuSharedComponent;
  let fixture: ComponentFixture<XuatKhoVatTuSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuatKhoVatTuSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuatKhoVatTuSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
