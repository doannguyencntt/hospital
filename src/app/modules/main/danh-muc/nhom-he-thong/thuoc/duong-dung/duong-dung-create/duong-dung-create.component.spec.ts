import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuongDungCreateComponent } from './duong-dung-create.component';

describe('DuongDungCreateComponent', () => {
  let component: DuongDungCreateComponent;
  let fixture: ComponentFixture<DuongDungCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuongDungCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuongDungCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
