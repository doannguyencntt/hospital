import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxnumericComponent } from './textboxnumeric.component';

describe('TextboxnumericComponent', () => {
  let component: TextboxnumericComponent;
  let fixture: ComponentFixture<TextboxnumericComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextboxnumericComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxnumericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
