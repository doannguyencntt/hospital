import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuInTheoDoiChucNangComponent } from './phieu-in-theo-doi-chuc-nang.component';

describe('PhieuInTheoDoiChucNangComponent', () => {
  let component: PhieuInTheoDoiChucNangComponent;
  let fixture: ComponentFixture<PhieuInTheoDoiChucNangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuInTheoDoiChucNangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuInTheoDoiChucNangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
