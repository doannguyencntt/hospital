import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiayInChuyenTuyenComponent } from './giay-in-chuyen-tuyen.component';

describe('GiayInChuyenTuyenComponent', () => {
  let component: GiayInChuyenTuyenComponent;
  let fixture: ComponentFixture<GiayInChuyenTuyenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiayInChuyenTuyenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiayInChuyenTuyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
