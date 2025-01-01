import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhomThuocListComponent } from './nhom-thuoc-list.component';

describe('NhomThuocListComponent', () => {
  let component: NhomThuocListComponent;
  let fixture: ComponentFixture<NhomThuocListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhomThuocListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhomThuocListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
