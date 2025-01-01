import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KetQuaXetNghiemUpdateComponent } from './ket-qua-xet-nghiem-update.component';

describe('KetQuaXetNghiemUpdateComponent', () => {
  let component: KetQuaXetNghiemUpdateComponent;
  let fixture: ComponentFixture<KetQuaXetNghiemUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetQuaXetNghiemUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KetQuaXetNghiemUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
