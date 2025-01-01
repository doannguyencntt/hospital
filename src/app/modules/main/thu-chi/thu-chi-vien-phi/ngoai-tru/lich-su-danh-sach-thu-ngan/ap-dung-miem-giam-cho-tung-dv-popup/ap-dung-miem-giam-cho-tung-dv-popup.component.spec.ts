import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MiemGiamChoTungDichVuComponent } from './ap-dung-miem-giam-cho-tung-dv-popup.component';

describe('MiemGiamChoTungDichVuComponent', () => {
  let component: MiemGiamChoTungDichVuComponent;
  let fixture: ComponentFixture<MiemGiamChoTungDichVuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiemGiamChoTungDichVuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiemGiamChoTungDichVuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
