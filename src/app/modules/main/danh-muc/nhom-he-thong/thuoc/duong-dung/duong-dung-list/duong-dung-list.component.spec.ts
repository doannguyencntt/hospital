import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuongDungListComponent } from './duong-dung-list.component';

describe('DuongDungListComponent', () => {
  let component: DuongDungListComponent;
  let fixture: ComponentFixture<DuongDungListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuongDungListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuongDungListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
