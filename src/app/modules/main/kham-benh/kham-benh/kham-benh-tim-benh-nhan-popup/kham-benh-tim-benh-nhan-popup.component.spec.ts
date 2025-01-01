import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamBenhTimBenhNhanPopupComponent } from './kham-benh-tim-benh-nhan-popup.component';

describe('KhamBenhTimBenhNhanPopupComponent', () => {
  let component: KhamBenhTimBenhNhanPopupComponent;
  let fixture: ComponentFixture<KhamBenhTimBenhNhanPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamBenhTimBenhNhanPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamBenhTimBenhNhanPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
