import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XetNghiemCapCodeListComponent } from './xet-nghiem-cap-code-list.component';

describe('XetNghiemCapCodeListComponent', () => {
  let component: XetNghiemCapCodeListComponent;
  let fixture: ComponentFixture<XetNghiemCapCodeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XetNghiemCapCodeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XetNghiemCapCodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
