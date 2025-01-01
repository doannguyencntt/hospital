import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DuyetVatTuNhapKhoChiTietComponent } from './duyet-nhap-kho-chi-tiet.component';


describe('DuyetVatTuNhapKhoChiTietComponent', () => {
  let component: DuyetVatTuNhapKhoChiTietComponent;
  let fixture: ComponentFixture<DuyetVatTuNhapKhoChiTietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuyetVatTuNhapKhoChiTietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyetVatTuNhapKhoChiTietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
