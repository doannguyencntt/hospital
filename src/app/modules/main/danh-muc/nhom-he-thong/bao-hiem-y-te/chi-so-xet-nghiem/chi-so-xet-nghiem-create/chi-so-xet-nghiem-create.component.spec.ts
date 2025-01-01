import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiSoXetNghiemCreateComponent } from './chi-so-xet-nghiem-create.component';

describe('ChiSoXetNghiemCreateComponent', () => {
  let component: ChiSoXetNghiemCreateComponent;
  let fixture: ComponentFixture<ChiSoXetNghiemCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiSoXetNghiemCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiSoXetNghiemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
