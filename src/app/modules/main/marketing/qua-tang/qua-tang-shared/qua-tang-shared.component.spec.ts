import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuaTangSharedComponent } from './qua-tang-shared.component';

describe('QuaTangSharedComponent', () => {
  let component: QuaTangSharedComponent;
  let fixture: ComponentFixture<QuaTangSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuaTangSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuaTangSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
