import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdrPhanUngCoHaiCuaThuocSharedComponent } from './adr-phan-ung-co-hai-cua-thuoc-shared.component';

describe('AdrPhanUngCoHaiCuaThuocSharedComponent', () => {
  let component: AdrPhanUngCoHaiCuaThuocSharedComponent;
  let fixture: ComponentFixture<AdrPhanUngCoHaiCuaThuocSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdrPhanUngCoHaiCuaThuocSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdrPhanUngCoHaiCuaThuocSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
