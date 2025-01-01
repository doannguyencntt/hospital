import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhapKhoCreateComponent } from './nhap-kho-create.component';

describe('NhapKhoCreateComponent', () => {
  let component: NhapKhoCreateComponent;
  let fixture: ComponentFixture<NhapKhoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhapKhoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhapKhoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
