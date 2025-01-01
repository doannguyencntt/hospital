import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiDungMauKhamBenhPopupComponent } from './noi-dung-mau-kham-benh-popup.component';

describe('NoiDungMauKhamBenhPopupComponent', () => {
  let component: NoiDungMauKhamBenhPopupComponent;
  let fixture: ComponentFixture<NoiDungMauKhamBenhPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoiDungMauKhamBenhPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoiDungMauKhamBenhPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
