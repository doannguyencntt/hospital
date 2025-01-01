import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DuocPhamSharedComponent } from './duoc-pham-shared.component';

describe('DuocPhamSharedComponent', () => {
  let component: DuocPhamSharedComponent;
  let fixture: ComponentFixture<DuocPhamSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuocPhamSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuocPhamSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
