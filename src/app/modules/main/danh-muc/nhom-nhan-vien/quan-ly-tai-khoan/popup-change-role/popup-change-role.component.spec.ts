import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupChangeRoleComponent } from './popup-change-role.component';

describe('PopupChangeRoleComponent', () => {
  let component: PopupChangeRoleComponent;
  let fixture: ComponentFixture<PopupChangeRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupChangeRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupChangeRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
