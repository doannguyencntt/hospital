import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HocViHocHamShareComponent } from './hoc-vi-hoc-ham-share.component';

describe('HocViHocHamShareComponent', () => {
  let component: HocViHocHamShareComponent;
  let fixture: ComponentFixture<HocViHocHamShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HocViHocHamShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HocViHocHamShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
