import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiayChungSinhComponent } from './giay-chung-sinh.component';

describe('GiayChungSinhComponent', () => {
  let component: GiayChungSinhComponent;
  let fixture: ComponentFixture<GiayChungSinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiayChungSinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiayChungSinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
