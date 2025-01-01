import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupThemGoiComponent } from './popup-them-goi.component';

describe('PopupThemGoiComponent', () => {
  let component: PopupThemGoiComponent;
  let fixture: ComponentFixture<PopupThemGoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupThemGoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupThemGoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
