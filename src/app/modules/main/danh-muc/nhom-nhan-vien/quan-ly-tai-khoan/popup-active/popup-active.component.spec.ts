import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupActiveComponent } from './popup-active.component';

describe('PopupActiveComponent', () => {
  let component: PopupActiveComponent;
  let fixture: ComponentFixture<PopupActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
