import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBenhNhanPopupComponent } from './the-benh-nhan-popup.component';

describe('TheBenhNhanPopupComponent', () => {
  let component: TheBenhNhanPopupComponent;
  let fixture: ComponentFixture<TheBenhNhanPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheBenhNhanPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBenhNhanPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
