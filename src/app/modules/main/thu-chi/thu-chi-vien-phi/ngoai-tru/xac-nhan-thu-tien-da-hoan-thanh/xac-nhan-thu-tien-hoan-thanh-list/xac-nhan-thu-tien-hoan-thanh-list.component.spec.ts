import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XacNhanThuTienHoanThanhListComponent } from './xac-nhan-thu-tien-hoan-thanh-list.component';

describe('XacNhanThuTienHoanThanhListComponent', () => {
  let component: XacNhanThuTienHoanThanhListComponent;
  let fixture: ComponentFixture<XacNhanThuTienHoanThanhListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XacNhanThuTienHoanThanhListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XacNhanThuTienHoanThanhListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
