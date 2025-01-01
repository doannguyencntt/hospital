import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiSoXetNghiemSharedComponent } from './chi-so-xet-nghiem-shared.component';

describe('ChiSoXetNghiemSharedComponent', () => {
  let component: ChiSoXetNghiemSharedComponent;
  let fixture: ComponentFixture<ChiSoXetNghiemSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiSoXetNghiemSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiSoXetNghiemSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
