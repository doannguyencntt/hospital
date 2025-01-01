import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonViTinhUpdateComponent } from './don-vi-tinh-update.component';

describe('DonViTinhUpdateComponent', () => {
  let component: DonViTinhUpdateComponent;
  let fixture: ComponentFixture<DonViTinhUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonViTinhUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonViTinhUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
