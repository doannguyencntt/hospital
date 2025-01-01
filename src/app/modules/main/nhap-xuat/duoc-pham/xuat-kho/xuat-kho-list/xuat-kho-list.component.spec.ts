import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XuatKhoListComponent } from './xuat-kho-list.component';

describe('XuatKhoListComponent', () => {
  let component: XuatKhoListComponent;
  let fixture: ComponentFixture<XuatKhoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuatKhoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuatKhoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
