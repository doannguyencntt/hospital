import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiepNhanNoiTruSoDoGiuongPopupComponent } from './tiep-nhan-noi-tru-so-do-giuong-popup.component';

describe('TiepNhanNoiTruSoDoGiuongPopupComponent', () => {
  let component: TiepNhanNoiTruSoDoGiuongPopupComponent;
  let fixture: ComponentFixture<TiepNhanNoiTruSoDoGiuongPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiepNhanNoiTruSoDoGiuongPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiepNhanNoiTruSoDoGiuongPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
