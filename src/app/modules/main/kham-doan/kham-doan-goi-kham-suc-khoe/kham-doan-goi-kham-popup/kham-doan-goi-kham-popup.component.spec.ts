import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GoiKhamViewPopupComponent } from './kham-doan-goi-kham-popup.component';

describe('GoiKhamViewPopupComponent', () => {
  let component: GoiKhamViewPopupComponent;
  let fixture: ComponentFixture<GoiKhamViewPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoiKhamViewPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoiKhamViewPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
