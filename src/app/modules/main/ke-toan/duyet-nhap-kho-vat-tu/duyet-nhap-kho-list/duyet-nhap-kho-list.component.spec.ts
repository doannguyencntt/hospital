import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetVatTuNhapKhoListComponent } from './duyet-nhap-kho-list.component';

describe('DuyetVatTuNhapKhoListComponent', () => {
  let component: DuyetVatTuNhapKhoListComponent;
  let fixture: ComponentFixture<DuyetVatTuNhapKhoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuyetVatTuNhapKhoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyetVatTuNhapKhoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
