import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupInChiDinhBsKhacComponent } from './popup-in-chi-dinh-bs-khac.component';

describe('PopupInChiDinhBsKhacComponent', () => {
  let component: PopupInChiDinhBsKhacComponent;
  let fixture: ComponentFixture<PopupInChiDinhBsKhacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupInChiDinhBsKhacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupInChiDinhBsKhacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
