import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KetQuaXetNghiemSharedComponent } from './ket-qua-xet-nghiem-shared.component';

describe('KetQuaXetNghiemSharedComponent', () => {
  let component: KetQuaXetNghiemSharedComponent;
  let fixture: ComponentFixture<KetQuaXetNghiemSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetQuaXetNghiemSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KetQuaXetNghiemSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
