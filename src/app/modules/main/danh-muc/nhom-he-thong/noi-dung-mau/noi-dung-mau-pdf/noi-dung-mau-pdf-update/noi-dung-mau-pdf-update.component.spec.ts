import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiDungMauPdfUpdateComponent } from './noi-dung-mau-pdf-update.component';

describe('NoiDungMauPdfUpdateComponent', () => {
  let component: NoiDungMauPdfUpdateComponent;
  let fixture: ComponentFixture<NoiDungMauPdfUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoiDungMauPdfUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoiDungMauPdfUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
