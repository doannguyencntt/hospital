import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuongDungSharedComponent } from './duong-dung-shared.component';

describe('DuongDungSharedComponent', () => {
  let component: DuongDungSharedComponent;
  let fixture: ComponentFixture<DuongDungSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuongDungSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuongDungSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
