import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HocViHocHamUpdateComponent } from './hoc-vi-hoc-ham-update.component';

describe('HocViHocHamUpdateComponent', () => {
  let component: HocViHocHamUpdateComponent;
  let fixture: ComponentFixture<HocViHocHamUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HocViHocHamUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HocViHocHamUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
