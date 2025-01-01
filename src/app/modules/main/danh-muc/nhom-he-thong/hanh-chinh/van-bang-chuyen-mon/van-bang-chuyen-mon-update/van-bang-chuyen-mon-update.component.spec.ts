import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanBangChuyenMonUpdateComponent } from './van-bang-chuyen-mon-update.component';

describe('VanBangChuyenMonUpdateComponent', () => {
  let component: VanBangChuyenMonUpdateComponent;
  let fixture: ComponentFixture<VanBangChuyenMonUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanBangChuyenMonUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanBangChuyenMonUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
