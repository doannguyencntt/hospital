import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { XacNhanHuyThuComponent } from './xac-nhan-phieu-huy-thu.component';

describe('XacNhanHuyThuComponent', () => {
  let component: XacNhanHuyThuComponent;
  let fixture: ComponentFixture<XacNhanHuyThuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XacNhanHuyThuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XacNhanHuyThuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
