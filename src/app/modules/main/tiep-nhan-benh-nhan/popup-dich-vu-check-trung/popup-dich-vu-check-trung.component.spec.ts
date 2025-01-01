import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDichVuCheckTrungComponent } from './popup-dich-vu-check-trung.component';

describe('PopupDichVuCheckTrungComponent', () => {
  let component: PopupDichVuCheckTrungComponent;
  let fixture: ComponentFixture<PopupDichVuCheckTrungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupDichVuCheckTrungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDichVuCheckTrungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
