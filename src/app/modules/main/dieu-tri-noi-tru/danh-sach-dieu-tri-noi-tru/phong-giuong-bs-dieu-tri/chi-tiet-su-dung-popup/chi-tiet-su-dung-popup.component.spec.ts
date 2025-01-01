import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietSuDungPopupComponent } from './chi-tiet-su-dung-popup.component';

describe('ChiTietSuDungPopupComponent', () => {
  let component: ChiTietSuDungPopupComponent;
  let fixture: ComponentFixture<ChiTietSuDungPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietSuDungPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietSuDungPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
