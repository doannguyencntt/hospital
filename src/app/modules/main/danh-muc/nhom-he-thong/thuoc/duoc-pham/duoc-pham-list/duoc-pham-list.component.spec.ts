import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuocPhamListComponent } from './duoc-pham-list.component';

describe('DuocPhamListComponent', () => {
  let component: DuocPhamListComponent;
  let fixture: ComponentFixture<DuocPhamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuocPhamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuocPhamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
