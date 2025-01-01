import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhapKhoMauUpdateComponent } from './nhap-kho-mau-update.component';

describe('NhapKhoMauUpdateComponent', () => {
  let component: NhapKhoMauUpdateComponent;
  let fixture: ComponentFixture<NhapKhoMauUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhapKhoMauUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhapKhoMauUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
