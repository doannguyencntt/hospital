import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiDinhNgoaiTruThuocComponent } from './chi-dinh-ngoai-tru-thuoc.component';

describe('ChiDinhNgoaiTruThuocComponent', () => {
  let component: ChiDinhNgoaiTruThuocComponent;
  let fixture: ComponentFixture<ChiDinhNgoaiTruThuocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiDinhNgoaiTruThuocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiDinhNgoaiTruThuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
