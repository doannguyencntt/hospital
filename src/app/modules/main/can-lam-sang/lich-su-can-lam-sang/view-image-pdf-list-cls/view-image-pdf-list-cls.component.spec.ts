import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewImagePdfListClsComponent } from './view-image-pdf-list-cls.component';

describe('ViewImagePdfListClsComponent', () => {
  let component: ViewImagePdfListClsComponent;
  let fixture: ComponentFixture<ViewImagePdfListClsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewImagePdfListClsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewImagePdfListClsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
