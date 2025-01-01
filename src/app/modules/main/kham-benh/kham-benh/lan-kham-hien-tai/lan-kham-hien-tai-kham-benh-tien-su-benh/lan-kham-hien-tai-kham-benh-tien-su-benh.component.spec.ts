import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LanKhamHienTaiKhamBenhTienSuBenhComponent } from './lan-kham-hien-tai-kham-benh-tien-su-benh.component';


describe('LanKhamHienTaiKhamBenhTienSuBenhComponent', () => {
  let component: LanKhamHienTaiKhamBenhTienSuBenhComponent;
  let fixture: ComponentFixture<LanKhamHienTaiKhamBenhTienSuBenhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiKhamBenhTienSuBenhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiKhamBenhTienSuBenhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
