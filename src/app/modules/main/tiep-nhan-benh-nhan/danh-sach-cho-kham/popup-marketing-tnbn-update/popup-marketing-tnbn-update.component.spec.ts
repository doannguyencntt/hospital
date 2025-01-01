import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMarketingTnbnUpdateComponent } from './popup-marketing-tnbn-update.component';

describe('PopupMarketingTnbnUpdateComponent', () => {
  let component: PopupMarketingTnbnUpdateComponent;
  let fixture: ComponentFixture<PopupMarketingTnbnUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupMarketingTnbnUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupMarketingTnbnUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
