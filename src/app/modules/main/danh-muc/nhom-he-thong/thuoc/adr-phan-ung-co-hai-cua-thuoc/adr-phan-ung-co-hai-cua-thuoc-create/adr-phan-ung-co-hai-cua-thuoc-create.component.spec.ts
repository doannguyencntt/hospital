import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdrPhanUngCoHaiCuaThuocCreateComponent } from './adr-phan-ung-co-hai-cua-thuoc-create.component';

describe('AdrPhanUngCoHaiCuaThuocCreateComponent', () => {
  let component: AdrPhanUngCoHaiCuaThuocCreateComponent;
  let fixture: ComponentFixture<AdrPhanUngCoHaiCuaThuocCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdrPhanUngCoHaiCuaThuocCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdrPhanUngCoHaiCuaThuocCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
