import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuInSangLocDinhDuongComponent } from './phieu-in-sang-loc-dinh-duong.component';

describe('PhieuInSangLocDinhDuongComponent', () => {
  let component: PhieuInSangLocDinhDuongComponent;
  let fixture: ComponentFixture<PhieuInSangLocDinhDuongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuInSangLocDinhDuongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuInSangLocDinhDuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
