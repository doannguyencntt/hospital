import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChiTietChoQuyetToanComponent } from './chi-tiet-cho-quyet-toan.component';


describe('ChiTietChoQuyetToanComponent', () => {
  let component: ChiTietChoQuyetToanComponent;
  let fixture: ComponentFixture<ChiTietChoQuyetToanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietChoQuyetToanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietChoQuyetToanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
