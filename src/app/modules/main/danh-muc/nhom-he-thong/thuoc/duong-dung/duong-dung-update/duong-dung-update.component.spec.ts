import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuongDungUpdateComponent } from './duong-dung-update.component';

describe('DuongDungUpdateComponent', () => {
  let component: DuongDungUpdateComponent;
  let fixture: ComponentFixture<DuongDungUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuongDungUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuongDungUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
