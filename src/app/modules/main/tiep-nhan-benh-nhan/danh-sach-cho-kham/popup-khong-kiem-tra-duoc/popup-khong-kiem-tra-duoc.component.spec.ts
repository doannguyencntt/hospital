import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupKhongKiemTraDuocComponent } from './popup-khong-kiem-tra-duoc.component';

describe('PopupKhongKiemTraDuocComponent', () => {
  let component: PopupKhongKiemTraDuocComponent;
  let fixture: ComponentFixture<PopupKhongKiemTraDuocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupKhongKiemTraDuocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupKhongKiemTraDuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
