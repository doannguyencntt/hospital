import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiayChuyenTuyenComponent } from './giay-chuyen-tuyen.component';

describe('GiayChuyenTuyenComponent', () => {
  let component: GiayChuyenTuyenComponent;
  let fixture: ComponentFixture<GiayChuyenTuyenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiayChuyenTuyenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiayChuyenTuyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
