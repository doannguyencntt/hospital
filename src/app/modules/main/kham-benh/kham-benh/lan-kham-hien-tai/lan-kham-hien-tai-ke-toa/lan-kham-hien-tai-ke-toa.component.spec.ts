import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LanKhamHienTaiKeToaComponent } from './lan-kham-hien-tai-ke-toa.component';

describe('LanKhamHienTaiKeToaComponent', () => {
  let component: LanKhamHienTaiKeToaComponent;
  let fixture: ComponentFixture<LanKhamHienTaiKeToaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiKeToaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiKeToaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
