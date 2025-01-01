import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HocViHocHamCreateComponent } from './hoc-vi-hoc-ham-create.component';

describe('HocViHocHamCreateComponent', () => {
  let component: HocViHocHamCreateComponent;
  let fixture: ComponentFixture<HocViHocHamCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HocViHocHamCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HocViHocHamCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
