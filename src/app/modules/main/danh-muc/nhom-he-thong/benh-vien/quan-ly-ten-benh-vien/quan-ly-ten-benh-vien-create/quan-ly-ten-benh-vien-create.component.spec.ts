import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyTenBenhVienCreateComponent } from './quan-ly-ten-benh-vien-create.component';

describe('QuanLyTenBenhVienCreateComponent', () => {
  let component: QuanLyTenBenhVienCreateComponent;
  let fixture: ComponentFixture<QuanLyTenBenhVienCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyTenBenhVienCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyTenBenhVienCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
