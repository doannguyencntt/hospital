import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuocPhamCreateComponent } from './duoc-pham-create.component';

describe('DuocPhamCreateComponent', () => {
  let component: DuocPhamCreateComponent;
  let fixture: ComponentFixture<DuocPhamCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuocPhamCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuocPhamCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
