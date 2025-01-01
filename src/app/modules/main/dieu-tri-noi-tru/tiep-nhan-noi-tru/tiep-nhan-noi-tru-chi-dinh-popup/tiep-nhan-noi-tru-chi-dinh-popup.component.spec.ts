import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiepNhanNoiTruChiDinhPopupComponent } from './tiep-nhan-noi-tru-chi-dinh-popup.component';

describe('TiepNhanNoiTruChiDinhPopupComponent', () => {
  let component: TiepNhanNoiTruChiDinhPopupComponent;
  let fixture: ComponentFixture<TiepNhanNoiTruChiDinhPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiepNhanNoiTruChiDinhPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiepNhanNoiTruChiDinhPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
