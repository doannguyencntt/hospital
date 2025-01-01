import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewImagePdfComponent } from './view-image-pdf.component';

describe('ViewImagePdfComponent', () => {
  let component: ViewImagePdfComponent;
  let fixture: ComponentFixture<ViewImagePdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewImagePdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewImagePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
