import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdrPhanUngCoHaiCuaThuocUpdateComponent } from './adr-phan-ung-co-hai-cua-thuoc-update.component';

describe('AdrPhanUngCoHaiCuaThuocUpdateComponent', () => {
  let component: AdrPhanUngCoHaiCuaThuocUpdateComponent;
  let fixture: ComponentFixture<AdrPhanUngCoHaiCuaThuocUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdrPhanUngCoHaiCuaThuocUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdrPhanUngCoHaiCuaThuocUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
