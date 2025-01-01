import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiDungMauPdfListComponent } from './noi-dung-mau-pdf-list.component';

describe('NoiDungMauPdfListComponent', () => {
  let component: NoiDungMauPdfListComponent;
  let fixture: ComponentFixture<NoiDungMauPdfListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoiDungMauPdfListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoiDungMauPdfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
