import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaTruyenDichPopupComponent } from './sua-truyen-dich-popup.component';

describe('SuaTruyenDichPopupComponent', () => {
  let component: SuaTruyenDichPopupComponent;
  let fixture: ComponentFixture<SuaTruyenDichPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaTruyenDichPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaTruyenDichPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
