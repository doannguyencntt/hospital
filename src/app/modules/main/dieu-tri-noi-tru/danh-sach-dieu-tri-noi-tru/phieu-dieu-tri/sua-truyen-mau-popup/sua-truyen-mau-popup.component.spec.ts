import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaTruyenMauPopupComponent } from './sua-truyen-mau-popup.component';

describe('SuaTruyenMauPopupComponent', () => {
  let component: SuaTruyenMauPopupComponent;
  let fixture: ComponentFixture<SuaTruyenMauPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaTruyenMauPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaTruyenMauPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
