import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuChoiDuyetPopupComponent } from './tu-choi-duyet-popup.component';

describe('TuChoiDuyetPopupComponent', () => {
  let component: TuChoiDuyetPopupComponent;
  let fixture: ComponentFixture<TuChoiDuyetPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuChoiDuyetPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuChoiDuyetPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
