import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiayTuNguyenTrietSanComponent } from './giay-tu-nguyen-triet-san.component';

describe('GiayTuNguyenTrietSanComponent', () => {
  let component: GiayTuNguyenTrietSanComponent;
  let fixture: ComponentFixture<GiayTuNguyenTrietSanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiayTuNguyenTrietSanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiayTuNguyenTrietSanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
