import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ThongTinLanPhauThuatComponent } from './lan-phau-thuat.component';


describe('ThongTinLanPhauThuatComponent', () => {
  let component: ThongTinLanPhauThuatComponent;
  let fixture: ComponentFixture<ThongTinLanPhauThuatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThongTinLanPhauThuatComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinLanPhauThuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
