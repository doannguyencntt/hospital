import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhapKhoMauListComponent } from './nhap-kho-mau-list.component';

describe('NhapKhoMauListComponent', () => {
  let component: NhapKhoMauListComponent;
  let fixture: ComponentFixture<NhapKhoMauListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhapKhoMauListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhapKhoMauListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
