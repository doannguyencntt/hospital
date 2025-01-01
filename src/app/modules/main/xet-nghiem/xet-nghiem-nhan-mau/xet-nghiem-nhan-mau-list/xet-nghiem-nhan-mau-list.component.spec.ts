import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XetNghiemNhanMauListComponent } from './xet-nghiem-nhan-mau-list.component';

describe('XetNghiemNhanMauListComponent', () => {
  let component: XetNghiemNhanMauListComponent;
  let fixture: ComponentFixture<XetNghiemNhanMauListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XetNghiemNhanMauListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XetNghiemNhanMauListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
