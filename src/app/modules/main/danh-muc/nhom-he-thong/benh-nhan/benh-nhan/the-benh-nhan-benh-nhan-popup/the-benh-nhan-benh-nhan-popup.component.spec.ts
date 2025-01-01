import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBenhNhanBenhNhanPopupComponent } from './the-benh-nhan-benh-nhan-popup.component';

describe('TheBenhNhanBenhNhanPopupComponent', () => {
  let component: TheBenhNhanBenhNhanPopupComponent;
  let fixture: ComponentFixture<TheBenhNhanBenhNhanPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheBenhNhanBenhNhanPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBenhNhanBenhNhanPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
