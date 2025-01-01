import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DichVuChiDinhNgoaiTruComponent } from './dich-vu-chi-dinh-ngoai-tru.component';

describe('DichVuChiDinhNgoaiTruComponent', () => {
  let component: DichVuChiDinhNgoaiTruComponent;
  let fixture: ComponentFixture<DichVuChiDinhNgoaiTruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DichVuChiDinhNgoaiTruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DichVuChiDinhNgoaiTruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
