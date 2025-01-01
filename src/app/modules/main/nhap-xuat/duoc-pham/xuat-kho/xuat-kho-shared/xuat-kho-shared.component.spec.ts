import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XuatKhoSharedComponent } from './xuat-kho-shared.component';

describe('XuatKhoSharedComponent', () => {
  let component: XuatKhoSharedComponent;
  let fixture: ComponentFixture<XuatKhoSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuatKhoSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuatKhoSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
