import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfooterComponent } from './formfooter.component';

describe('FormfooterComponent', () => {
  let component: FormfooterComponent;
  let fixture: ComponentFixture<FormfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
