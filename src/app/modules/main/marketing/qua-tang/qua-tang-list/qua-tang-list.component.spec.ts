import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuaTangListComponent } from './qua-tang-list.component';

describe('QuaTangListComponent', () => {
  let component: QuaTangListComponent;
  let fixture: ComponentFixture<QuaTangListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuaTangListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuaTangListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
