import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaVienNoiTruComponent } from './ra-vien-noi-tru.component';

describe('RaVienNoiTruComponent', () => {
  let component: RaVienNoiTruComponent;
  let fixture: ComponentFixture<RaVienNoiTruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaVienNoiTruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaVienNoiTruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
