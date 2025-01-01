import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapGiuongComponent } from './cap-giuong.component';

describe('CapGiuongComponent', () => {
  let component: CapGiuongComponent;
  let fixture: ComponentFixture<CapGiuongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapGiuongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapGiuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
