import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetNhapKhoListComponent } from './duyet-nhap-kho-list.component';

describe('DuyetNhapKhoListComponent', () => {
  let component: DuyetNhapKhoListComponent;
  let fixture: ComponentFixture<DuyetNhapKhoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuyetNhapKhoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyetNhapKhoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
