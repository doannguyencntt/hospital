import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiDungMauPdfShareComponent } from './noi-dung-mau-pdf-share.component';

describe('NoiDungMauPdfShareComponent', () => {
  let component: NoiDungMauPdfShareComponent;
  let fixture: ComponentFixture<NoiDungMauPdfShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoiDungMauPdfShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoiDungMauPdfShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
