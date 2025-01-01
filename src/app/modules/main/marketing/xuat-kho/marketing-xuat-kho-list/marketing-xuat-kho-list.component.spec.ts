import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingXuatKhoListComponent } from './marketing-xuat-kho-list.component';

describe('MarketingXuatKhoListComponent', () => {
  let component: MarketingXuatKhoListComponent;
  let fixture: ComponentFixture<MarketingXuatKhoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingXuatKhoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingXuatKhoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
