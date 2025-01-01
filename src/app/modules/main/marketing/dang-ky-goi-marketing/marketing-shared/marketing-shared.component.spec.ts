import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingSharedComponent } from './marketing-shared.component';

describe('MarketingSharedComponent', () => {
  let component: MarketingSharedComponent;
  let fixture: ComponentFixture<MarketingSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
