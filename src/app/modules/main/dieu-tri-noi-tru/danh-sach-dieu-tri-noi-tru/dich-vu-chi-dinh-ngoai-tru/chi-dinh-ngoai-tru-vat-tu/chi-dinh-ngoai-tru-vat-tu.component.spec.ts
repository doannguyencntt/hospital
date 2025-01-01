import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiDinhNgoaiTruVatTuComponent } from './chi-dinh-ngoai-tru-vat-tu.component';

describe('ChiDinhNgoaiTruVatTuComponent', () => {
  let component: ChiDinhNgoaiTruVatTuComponent;
  let fixture: ComponentFixture<ChiDinhNgoaiTruVatTuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiDinhNgoaiTruVatTuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiDinhNgoaiTruVatTuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
