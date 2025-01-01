import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyTenBenhVienUpdateComponent } from './quan-ly-ten-benh-vien-update.component';

describe('QuanLyTenBenhVienUpdateComponent', () => {
  let component: QuanLyTenBenhVienUpdateComponent;
  let fixture: ComponentFixture<QuanLyTenBenhVienUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyTenBenhVienUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyTenBenhVienUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
