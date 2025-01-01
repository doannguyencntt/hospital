import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XuatKhoKhacListComponent } from './xuat-kho-khac-list.component';

describe('XuatKhoKhacListComponent', () => {
  let component: XuatKhoKhacListComponent;
  let fixture: ComponentFixture<XuatKhoKhacListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuatKhoKhacListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuatKhoKhacListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
