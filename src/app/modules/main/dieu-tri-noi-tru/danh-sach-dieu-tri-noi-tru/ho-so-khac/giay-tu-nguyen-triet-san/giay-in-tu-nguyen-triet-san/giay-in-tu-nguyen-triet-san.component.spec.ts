import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiayInTuNguyenTrietSanComponent } from './giay-in-tu-nguyen-triet-san.component';

describe('GiayInTuNguyenTrietSanComponent', () => {
  let component: GiayInTuNguyenTrietSanComponent;
  let fixture: ComponentFixture<GiayInTuNguyenTrietSanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiayInTuNguyenTrietSanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiayInTuNguyenTrietSanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
