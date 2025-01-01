import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupTimNhanVienComponent } from './popup-tim-nhan-vien.component';

describe('PopupTimNhanVienComponent', () => {
  let component: PopupTimNhanVienComponent;
  let fixture: ComponentFixture<PopupTimNhanVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupTimNhanVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupTimNhanVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
