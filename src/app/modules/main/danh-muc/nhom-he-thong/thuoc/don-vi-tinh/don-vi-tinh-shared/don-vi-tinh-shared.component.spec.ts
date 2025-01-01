import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonViTinhSharedComponent } from './don-vi-tinh-shared.component';

describe('DonViTinhSharedComponent', () => {
  let component: DonViTinhSharedComponent;
  let fixture: ComponentFixture<DonViTinhSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonViTinhSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonViTinhSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
