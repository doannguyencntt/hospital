import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PhieuMuaTruTaiKhoaComponent } from './phieu-mua-du-tru-tai-khoa.component';

describe('PhieuMuaTruTaiKhoaComponent', () => {
  let component: PhieuMuaTruTaiKhoaComponent;
  let fixture: ComponentFixture<PhieuMuaTruTaiKhoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuMuaTruTaiKhoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuMuaTruTaiKhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
