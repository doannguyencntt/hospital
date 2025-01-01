import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChiTietDaQuyetToanComponent } from './chi-tiet-da-quyet-toan.component';

describe('ChiTietDaQuyetToanComponent', () => {
  let component: ChiTietDaQuyetToanComponent;
  let fixture: ComponentFixture<ChiTietDaQuyetToanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietDaQuyetToanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietDaQuyetToanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
