import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XuatKhoCreateComponent } from './xuat-kho-create.component';

describe('XuatKhoCreateComponent', () => {
  let component: XuatKhoCreateComponent;
  let fixture: ComponentFixture<XuatKhoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuatKhoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuatKhoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
