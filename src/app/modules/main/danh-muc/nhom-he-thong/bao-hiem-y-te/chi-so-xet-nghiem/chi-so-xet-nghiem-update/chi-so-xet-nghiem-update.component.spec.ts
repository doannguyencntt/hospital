import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiSoXetNghiemUpdateComponent } from './chi-so-xet-nghiem-update.component';

describe('ChiSoXetNghiemUpdateComponent', () => {
  let component: ChiSoXetNghiemUpdateComponent;
  let fixture: ComponentFixture<ChiSoXetNghiemUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiSoXetNghiemUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiSoXetNghiemUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
