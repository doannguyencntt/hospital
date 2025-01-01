import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFileCompomentComponent } from './view-file-compoment.component';

describe('ViewFileCompomentComponent', () => {
  let component: ViewFileCompomentComponent;
  let fixture: ComponentFixture<ViewFileCompomentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFileCompomentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFileCompomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
