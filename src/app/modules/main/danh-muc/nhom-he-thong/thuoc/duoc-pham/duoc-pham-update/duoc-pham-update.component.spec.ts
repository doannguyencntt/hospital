import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuocPhamUpdateComponent } from './duoc-pham-update.component';

describe('DuocPhamUpdateComponent', () => {
  let component: DuocPhamUpdateComponent;
  let fixture: ComponentFixture<DuocPhamUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuocPhamUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuocPhamUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
