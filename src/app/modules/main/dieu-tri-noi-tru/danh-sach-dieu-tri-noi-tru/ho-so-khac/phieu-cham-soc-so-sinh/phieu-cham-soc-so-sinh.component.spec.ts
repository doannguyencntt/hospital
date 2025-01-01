import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuChamSocSoSinhComponent } from './phieu-cham-soc-so-sinh.component';

describe('PhieuChamSocSoSinhComponent', () => {
  let component: PhieuChamSocSoSinhComponent;
  let fixture: ComponentFixture<PhieuChamSocSoSinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuChamSocSoSinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuChamSocSoSinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
