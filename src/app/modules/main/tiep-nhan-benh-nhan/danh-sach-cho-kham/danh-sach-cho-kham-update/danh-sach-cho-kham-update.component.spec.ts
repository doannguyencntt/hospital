import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachChoKhamUpdateComponent } from './danh-sach-cho-kham-update.component';

describe('DanhSachChoKhamUpdateComponent', () => {
  let component: DanhSachChoKhamUpdateComponent;
  let fixture: ComponentFixture<DanhSachChoKhamUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachChoKhamUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachChoKhamUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
