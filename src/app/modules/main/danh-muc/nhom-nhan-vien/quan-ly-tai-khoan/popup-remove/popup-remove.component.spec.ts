import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupRemoveComponent } from './popup-remove.component';

describe('PopupRemoveComponent', () => {
  let component: PopupRemoveComponent;
  let fixture: ComponentFixture<PopupRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
