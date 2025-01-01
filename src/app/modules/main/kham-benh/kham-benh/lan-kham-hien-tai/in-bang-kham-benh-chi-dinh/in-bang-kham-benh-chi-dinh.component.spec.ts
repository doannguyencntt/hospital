import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InBangKhamBenhChiDinhComponent } from './in-bang-kham-benh-chi-dinh.component';

describe('InBangKhamBenhChiDinhComponent', () => {
  let component: InBangKhamBenhChiDinhComponent;
  let fixture: ComponentFixture<InBangKhamBenhChiDinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InBangKhamBenhChiDinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InBangKhamBenhChiDinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
