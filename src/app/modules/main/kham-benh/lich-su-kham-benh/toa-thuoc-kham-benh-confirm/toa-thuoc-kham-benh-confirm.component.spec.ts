import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToaThuocKhamBenhConfirmComponent } from './toa-thuoc-kham-benh-confirm.component';

describe('ToaThuocKhamBenhConfirmComponent', () => {
  let component: ToaThuocKhamBenhConfirmComponent;
  let fixture: ComponentFixture<ToaThuocKhamBenhConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToaThuocKhamBenhConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToaThuocKhamBenhConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
