import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanBangChuyenMonListComponent } from './van-bang-chuyen-mon-list.component';

describe('VanBangChuyenMonListComponent', () => {
  let component: VanBangChuyenMonListComponent;
  let fixture: ComponentFixture<VanBangChuyenMonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanBangChuyenMonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanBangChuyenMonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
