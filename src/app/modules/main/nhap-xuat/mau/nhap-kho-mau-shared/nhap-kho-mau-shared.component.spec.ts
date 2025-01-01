import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhapKhoMauSharedComponent } from './nhap-kho-mau-shared.component';

describe('NhapKhoMauSharedComponent', () => {
  let component: NhapKhoMauSharedComponent;
  let fixture: ComponentFixture<NhapKhoMauSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhapKhoMauSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhapKhoMauSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
