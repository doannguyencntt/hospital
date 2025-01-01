import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhapKhoTuChoiDuyetComponent } from './nhap-kho-tu-choi-duyet.component';

describe('NhapKhoTuChoiDuyetComponent', () => {
  let component: NhapKhoTuChoiDuyetComponent;
  let fixture: ComponentFixture<NhapKhoTuChoiDuyetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhapKhoTuChoiDuyetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhapKhoTuChoiDuyetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
