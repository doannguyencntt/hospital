import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingUpdateComponent } from './marketing-update.component';

describe('MarketingUpdateComponent', () => {
  let component: MarketingUpdateComponent;
  let fixture: ComponentFixture<MarketingUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
