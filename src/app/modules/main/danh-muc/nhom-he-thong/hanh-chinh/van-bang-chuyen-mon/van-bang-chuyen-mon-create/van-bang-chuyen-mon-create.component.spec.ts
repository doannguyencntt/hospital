import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanBangChuyenMonCreateComponent } from './van-bang-chuyen-mon-create.component';

describe('VanBangChuyenMonCreateComponent', () => {
  let component: VanBangChuyenMonCreateComponent;
  let fixture: ComponentFixture<VanBangChuyenMonCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanBangChuyenMonCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanBangChuyenMonCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
