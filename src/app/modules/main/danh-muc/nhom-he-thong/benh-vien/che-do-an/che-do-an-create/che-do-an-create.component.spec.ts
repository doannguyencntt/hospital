import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheDoAnCreateComponent } from './che-do-an-create.component';

describe('CheDoAnCreateComponent', () => {
  let component: CheDoAnCreateComponent;
  let fixture: ComponentFixture<CheDoAnCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheDoAnCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheDoAnCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
