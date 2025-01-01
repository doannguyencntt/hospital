import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonViTinhListComponent } from './don-vi-tinh-list.component';

describe('DonViTinhListComponent', () => {
  let component: DonViTinhListComponent;
  let fixture: ComponentFixture<DonViTinhListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonViTinhListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonViTinhListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
