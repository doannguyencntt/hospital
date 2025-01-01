import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaoBenhAnSoSinhPopupComponent } from './tao-benh-an-so-sinh-popup.component';

describe('TaoBenhAnSoSinhPopupComponent', () => {
  let component: TaoBenhAnSoSinhPopupComponent;
  let fixture: ComponentFixture<TaoBenhAnSoSinhPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaoBenhAnSoSinhPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaoBenhAnSoSinhPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
