import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhapKhoTuDaDuyetComponent } from './nhap-kho-tu-da-duyet.component';

describe('NhapKhoTuDaDuyetComponent', () => {
  let component: NhapKhoTuDaDuyetComponent;
  let fixture: ComponentFixture<NhapKhoTuDaDuyetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhapKhoTuDaDuyetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhapKhoTuDaDuyetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
