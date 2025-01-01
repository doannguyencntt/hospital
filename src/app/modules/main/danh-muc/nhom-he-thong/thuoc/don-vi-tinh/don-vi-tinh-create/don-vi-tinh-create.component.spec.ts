import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonViTinhCreateComponent } from './don-vi-tinh-create.component';

describe('DonViTinhCreateComponent', () => {
  let component: DonViTinhCreateComponent;
  let fixture: ComponentFixture<DonViTinhCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonViTinhCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonViTinhCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
