import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuaTangCreateComponent } from './qua-tang-create.component';

describe('QuaTangCreateComponent', () => {
  let component: QuaTangCreateComponent;
  let fixture: ComponentFixture<QuaTangCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuaTangCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuaTangCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
