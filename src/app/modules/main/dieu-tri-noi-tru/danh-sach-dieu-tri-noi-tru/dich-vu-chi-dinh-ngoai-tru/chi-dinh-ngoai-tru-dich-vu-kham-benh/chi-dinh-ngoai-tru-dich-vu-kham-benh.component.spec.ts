import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiDinhNgoaiTruDichVuKhamBenhComponent } from './chi-dinh-ngoai-tru-dich-vu-kham-benh.component';

describe('ChiDinhNgoaiTruDichVuKhamBenhComponent', () => {
  let component: ChiDinhNgoaiTruDichVuKhamBenhComponent;
  let fixture: ComponentFixture<ChiDinhNgoaiTruDichVuKhamBenhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiDinhNgoaiTruDichVuKhamBenhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiDinhNgoaiTruDichVuKhamBenhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
