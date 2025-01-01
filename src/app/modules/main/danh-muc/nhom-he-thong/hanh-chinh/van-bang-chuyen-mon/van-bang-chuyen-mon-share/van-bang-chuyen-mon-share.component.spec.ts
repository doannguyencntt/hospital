import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanBangChuyenMonShareComponent } from './van-bang-chuyen-mon-share.component';

describe('VanBangChuyenMonShareComponent', () => {
  let component: VanBangChuyenMonShareComponent;
  let fixture: ComponentFixture<VanBangChuyenMonShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanBangChuyenMonShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanBangChuyenMonShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
