import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupLichSuKhamChuaBenhComponent } from './popup-lich-su-kham-chua-benh.component';

describe('PopupLichSuKhamChuaBenhComponent', () => {
  let component: PopupLichSuKhamChuaBenhComponent;
  let fixture: ComponentFixture<PopupLichSuKhamChuaBenhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupLichSuKhamChuaBenhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupLichSuKhamChuaBenhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
