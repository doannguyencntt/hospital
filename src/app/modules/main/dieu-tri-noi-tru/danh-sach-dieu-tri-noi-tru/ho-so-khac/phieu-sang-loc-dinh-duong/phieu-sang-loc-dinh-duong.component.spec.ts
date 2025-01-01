import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuSangLocDinhDuongComponent } from './phieu-sang-loc-dinh-duong.component';

describe('PhieuSangLocDinhDuongComponent', () => {
  let component: PhieuSangLocDinhDuongComponent;
  let fixture: ComponentFixture<PhieuSangLocDinhDuongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuSangLocDinhDuongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuSangLocDinhDuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
