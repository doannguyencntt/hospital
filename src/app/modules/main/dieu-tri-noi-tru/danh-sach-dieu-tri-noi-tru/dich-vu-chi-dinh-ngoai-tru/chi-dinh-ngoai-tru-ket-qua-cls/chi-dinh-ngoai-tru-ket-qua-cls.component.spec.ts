import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiDinhNgoaiTruKetQuaClsComponent } from './chi-dinh-ngoai-tru-ket-qua-cls.component';

describe('ChiDinhNgoaiTruKetQuaClsComponent', () => {
  let component: ChiDinhNgoaiTruKetQuaClsComponent;
  let fixture: ComponentFixture<ChiDinhNgoaiTruKetQuaClsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiDinhNgoaiTruKetQuaClsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiDinhNgoaiTruKetQuaClsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
