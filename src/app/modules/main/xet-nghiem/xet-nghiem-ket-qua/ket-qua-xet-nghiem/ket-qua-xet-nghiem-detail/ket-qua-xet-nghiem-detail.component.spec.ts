import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KetQuaXetNghiemDetailComponent } from './ket-qua-xet-nghiem-detail.component';

describe('KetQuaXetNghiemDetailComponent', () => {
  let component: KetQuaXetNghiemDetailComponent;
  let fixture: ComponentFixture<KetQuaXetNghiemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetQuaXetNghiemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KetQuaXetNghiemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
