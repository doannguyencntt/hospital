import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiSoXetNghiemShareComponent } from './chi-so-xet-nghiem-share.component';

describe('ChiSoXetNghiemShareComponent', () => {
  let component: ChiSoXetNghiemShareComponent;
  let fixture: ComponentFixture<ChiSoXetNghiemShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiSoXetNghiemShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiSoXetNghiemShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
