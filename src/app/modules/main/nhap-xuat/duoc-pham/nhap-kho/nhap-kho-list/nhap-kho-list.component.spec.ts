import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhapKhoListComponent } from './nhap-kho-list.component';

describe('NhapKhoListComponent', () => {
  let component: NhapKhoListComponent;
  let fixture: ComponentFixture<NhapKhoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhapKhoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhapKhoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
