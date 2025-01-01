import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MiemGiamTheoDVComponent } from './ap-dung-miem-giam-cho-tung-dv-popup.component';

describe('MiemGiamTheoDVComponent', () => {
  let component: MiemGiamTheoDVComponent;
  let fixture: ComponentFixture<MiemGiamTheoDVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiemGiamTheoDVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiemGiamTheoDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
