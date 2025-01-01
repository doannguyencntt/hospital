import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TuChoiDuyetVatTuComponent } from './tu-choi-duyet-vat-tu.component';



describe('TuChoiDuyetVatTuComponent', () => {
  let component: TuChoiDuyetVatTuComponent;
  let fixture: ComponentFixture<TuChoiDuyetVatTuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuChoiDuyetVatTuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuChoiDuyetVatTuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
