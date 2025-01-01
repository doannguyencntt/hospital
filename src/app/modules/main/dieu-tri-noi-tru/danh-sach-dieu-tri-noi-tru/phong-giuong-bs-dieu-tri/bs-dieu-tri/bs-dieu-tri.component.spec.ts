import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsDieuTriComponent } from './bs-dieu-tri.component';

describe('BsDieuTriComponent', () => {
  let component: BsDieuTriComponent;
  let fixture: ComponentFixture<BsDieuTriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsDieuTriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsDieuTriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
