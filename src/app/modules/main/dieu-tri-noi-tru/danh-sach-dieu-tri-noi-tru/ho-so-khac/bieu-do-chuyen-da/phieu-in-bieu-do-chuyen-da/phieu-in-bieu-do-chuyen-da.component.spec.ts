import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuInBieuDoChuyenDaComponent } from './phieu-in-bieu-do-chuyen-da.component';

describe('PhieuInBieuDoChuyenDaComponent', () => {
  let component: PhieuInBieuDoChuyenDaComponent;
  let fixture: ComponentFixture<PhieuInBieuDoChuyenDaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuInBieuDoChuyenDaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuInBieuDoChuyenDaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
