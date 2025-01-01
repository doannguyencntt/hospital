import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiGioiThieuPopupComponent } from './noi-gioi-thieu-popup.component';

describe('NoiGioiThieuPopupComponent', () => {
  let component: NoiGioiThieuPopupComponent;
  let fixture: ComponentFixture<NoiGioiThieuPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoiGioiThieuPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoiGioiThieuPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
