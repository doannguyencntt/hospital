import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewImagePdfListComponent } from './view-image-pdf-list.component';

describe('ViewImagePdfListComponent', () => {
  let component: ViewImagePdfListComponent;
  let fixture: ComponentFixture<ViewImagePdfListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewImagePdfListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewImagePdfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
