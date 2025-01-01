import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiepNhanNoiTruBenhAnPopupComponent } from './tiep-nhan-noi-tru-benh-an-popup.component';

describe('TiepNhanNoiTruBenhAnPopupComponent', () => {
  let component: TiepNhanNoiTruBenhAnPopupComponent;
  let fixture: ComponentFixture<TiepNhanNoiTruBenhAnPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiepNhanNoiTruBenhAnPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiepNhanNoiTruBenhAnPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
