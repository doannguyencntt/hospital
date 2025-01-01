import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcdUpdateComponent } from './icd-update.component';

describe('IcdUpdateComponent', () => {
  let component: IcdUpdateComponent;
  let fixture: ComponentFixture<IcdUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcdUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcdUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
