import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdrPhanUngCoHaiCuaThuocListComponent } from './adr-phan-ung-co-hai-cua-thuoc-list.component';

describe('AdrPhanUngCoHaiCuaThuocListComponent', () => {
  let component: AdrPhanUngCoHaiCuaThuocListComponent;
  let fixture: ComponentFixture<AdrPhanUngCoHaiCuaThuocListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdrPhanUngCoHaiCuaThuocListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdrPhanUngCoHaiCuaThuocListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
