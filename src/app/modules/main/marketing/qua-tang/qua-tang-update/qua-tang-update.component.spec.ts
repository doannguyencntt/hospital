import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuaTangUpdateComponent } from './qua-tang-update.component';

describe('QuaTangUpdateComponent', () => {
  let component: QuaTangUpdateComponent;
  let fixture: ComponentFixture<QuaTangUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuaTangUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuaTangUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
