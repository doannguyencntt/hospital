import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhapKhoMauCreateComponent } from './nhap-kho-mau-create.component';

describe('NhapKhoMauCreateComponent', () => {
  let component: NhapKhoMauCreateComponent;
  let fixture: ComponentFixture<NhapKhoMauCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhapKhoMauCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhapKhoMauCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
