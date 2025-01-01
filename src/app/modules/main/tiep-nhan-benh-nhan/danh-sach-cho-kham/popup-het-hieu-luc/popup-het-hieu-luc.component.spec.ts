import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupHetHieuLucComponent } from './popup-het-hieu-luc.component';

describe('PopupHetHieuLucComponent', () => {
  let component: PopupHetHieuLucComponent;
  let fixture: ComponentFixture<PopupHetHieuLucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupHetHieuLucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupHetHieuLucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
