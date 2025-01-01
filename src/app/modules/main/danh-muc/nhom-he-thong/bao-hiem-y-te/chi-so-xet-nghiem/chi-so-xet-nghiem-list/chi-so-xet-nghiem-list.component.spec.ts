import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiSoXetNghiemListComponent } from './chi-so-xet-nghiem-list.component';

describe('ChiSoXetNghiemListComponent', () => {
  let component: ChiSoXetNghiemListComponent;
  let fixture: ComponentFixture<ChiSoXetNghiemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiSoXetNghiemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiSoXetNghiemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
