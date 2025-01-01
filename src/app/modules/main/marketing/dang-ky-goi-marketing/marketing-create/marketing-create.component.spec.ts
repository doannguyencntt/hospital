import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingCreateComponent } from './marketing-create.component';

describe('MarketingCreateComponent', () => {
  let component: MarketingCreateComponent;
  let fixture: ComponentFixture<MarketingCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
