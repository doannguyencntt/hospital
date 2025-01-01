import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietDieuTriNoiTruComponent } from './chi-tiet-dieu-tri-noi-tru.component';

describe('ChiTietDieuTriNoiTruComponent', () => {
  let component: ChiTietDieuTriNoiTruComponent;
  let fixture: ComponentFixture<ChiTietDieuTriNoiTruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietDieuTriNoiTruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietDieuTriNoiTruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
