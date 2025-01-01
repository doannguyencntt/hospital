import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcdCreateComponent } from './icd-create.component';

describe('IcdCreateComponent', () => {
  let component: IcdCreateComponent;
  let fixture: ComponentFixture<IcdCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcdCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcdCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
