import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiepNhanBenhNhanPopupComponent } from './tiep-nhan-benh-nhan-popup.component';

describe('TiepNhanBenhNhanPopupComponent', () => {
  let component: TiepNhanBenhNhanPopupComponent;
  let fixture: ComponentFixture<TiepNhanBenhNhanPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiepNhanBenhNhanPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiepNhanBenhNhanPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
