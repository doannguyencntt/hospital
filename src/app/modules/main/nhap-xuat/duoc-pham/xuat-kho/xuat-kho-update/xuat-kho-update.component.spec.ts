import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XuatKhoUpdateComponent } from './xuat-kho-update.component';

describe('XuatKhoUpdateComponent', () => {
  let component: XuatKhoUpdateComponent;
  let fixture: ComponentFixture<XuatKhoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuatKhoUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuatKhoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
