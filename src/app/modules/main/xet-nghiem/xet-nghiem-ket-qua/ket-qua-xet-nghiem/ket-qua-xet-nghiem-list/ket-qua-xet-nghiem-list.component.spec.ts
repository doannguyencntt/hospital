import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KetQuaXetNghiemListComponent } from './ket-qua-xet-nghiem-list.component';

describe('KetQuaXetNghiemListComponent', () => {
  let component: KetQuaXetNghiemListComponent;
  let fixture: ComponentFixture<KetQuaXetNghiemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetQuaXetNghiemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KetQuaXetNghiemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
