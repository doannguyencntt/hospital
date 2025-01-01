import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDichVuCheckTrungUpdateComponent } from './popup-dich-vu-check-trung-update.component';

describe('PopupDichVuCheckTrungUpdateComponent', () => {
  let component: PopupDichVuCheckTrungUpdateComponent;
  let fixture: ComponentFixture<PopupDichVuCheckTrungUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupDichVuCheckTrungUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDichVuCheckTrungUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
