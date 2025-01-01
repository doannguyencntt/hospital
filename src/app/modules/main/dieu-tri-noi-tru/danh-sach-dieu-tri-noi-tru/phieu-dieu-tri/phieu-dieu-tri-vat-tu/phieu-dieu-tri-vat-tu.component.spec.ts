import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuDieuTriVatTuComponent } from './phieu-dieu-tri-vat-tu.component';

describe('PhieuDieuTriVatTuComponent', () => {
  let component: PhieuDieuTriVatTuComponent;
  let fixture: ComponentFixture<PhieuDieuTriVatTuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuDieuTriVatTuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuDieuTriVatTuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
