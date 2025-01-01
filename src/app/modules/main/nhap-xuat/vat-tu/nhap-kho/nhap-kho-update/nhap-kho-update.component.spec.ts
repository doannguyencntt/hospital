import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhapKhoUpdateComponent } from './nhap-kho-update.component';

describe('NhapKhoUpdateComponent', () => {
  let component: NhapKhoUpdateComponent;
  let fixture: ComponentFixture<NhapKhoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhapKhoUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhapKhoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
