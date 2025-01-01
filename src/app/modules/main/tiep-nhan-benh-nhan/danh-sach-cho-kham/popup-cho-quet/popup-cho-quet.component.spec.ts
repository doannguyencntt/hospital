import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupChoQuetComponent } from './popup-cho-quet.component';

describe('PopupChoQuetComponent', () => {
  let component: PopupChoQuetComponent;
  let fixture: ComponentFixture<PopupChoQuetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupChoQuetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupChoQuetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
