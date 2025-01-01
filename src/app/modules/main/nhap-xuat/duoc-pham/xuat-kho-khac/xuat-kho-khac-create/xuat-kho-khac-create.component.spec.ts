import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XuatKhoKhacCreateComponent } from './xuat-kho-khac-create.component';

describe('XuatKhoKhacCreateComponent', () => {
  let component: XuatKhoKhacCreateComponent;
  let fixture: ComponentFixture<XuatKhoKhacCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuatKhoKhacCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuatKhoKhacCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
