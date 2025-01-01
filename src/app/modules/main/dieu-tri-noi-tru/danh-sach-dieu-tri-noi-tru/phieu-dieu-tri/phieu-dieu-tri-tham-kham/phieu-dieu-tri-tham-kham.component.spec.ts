import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuDieuTriThamKhamComponent } from './phieu-dieu-tri-tham-kham.component';

describe('PhieuDieuTriThamKhamComponent', () => {
  let component: PhieuDieuTriThamKhamComponent;
  let fixture: ComponentFixture<PhieuDieuTriThamKhamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuDieuTriThamKhamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuDieuTriThamKhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
