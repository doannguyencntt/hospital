import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KetQuaCdhaTdcnUpdateComponent } from './ket-qua-cdha-tdcn-update.component';

describe('KetQuaCdhaTdcnUpdateComponent', () => {
  let component: KetQuaCdhaTdcnUpdateComponent;
  let fixture: ComponentFixture<KetQuaCdhaTdcnUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetQuaCdhaTdcnUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KetQuaCdhaTdcnUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
