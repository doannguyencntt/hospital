import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupTimKiemBenhNhanComponent } from './popup-tim-kiem-benh-nhan.component';

describe('PopupTimKiemBenhNhanComponent', () => {
  let component: PopupTimKiemBenhNhanComponent;
  let fixture: ComponentFixture<PopupTimKiemBenhNhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupTimKiemBenhNhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupTimKiemBenhNhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
