import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuuTruHoSoUpdatePopupComponent } from './luu-tru-ho-so-update-popup.component';

describe('LuuTruHoSoUpdatePopupComponent', () => {
  let component: LuuTruHoSoUpdatePopupComponent;
  let fixture: ComponentFixture<LuuTruHoSoUpdatePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuuTruHoSoUpdatePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuuTruHoSoUpdatePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
