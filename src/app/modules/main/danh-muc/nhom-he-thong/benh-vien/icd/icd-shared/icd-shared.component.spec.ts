import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcdSharedComponent } from './icd-shared.component';

describe('IcdSharedComponent', () => {
  let component: IcdSharedComponent;
  let fixture: ComponentFixture<IcdSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcdSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcdSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
