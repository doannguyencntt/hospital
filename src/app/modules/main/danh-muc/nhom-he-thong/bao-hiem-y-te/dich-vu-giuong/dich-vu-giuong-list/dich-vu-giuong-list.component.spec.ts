import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DichVuGiuongListComponent } from './dich-vu-giuong-list.component';

describe('DichVuGiuongListComponent', () => {
  let component: DichVuGiuongListComponent;
  let fixture: ComponentFixture<DichVuGiuongListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DichVuGiuongListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DichVuGiuongListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
