import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KetQuaCdhaTdcnSharedComponent } from './ket-qua-cdha-tdcn-shared.component';

describe('KetQuaCdhaTdcnSharedComponent', () => {
  let component: KetQuaCdhaTdcnSharedComponent;
  let fixture: ComponentFixture<KetQuaCdhaTdcnSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetQuaCdhaTdcnSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KetQuaCdhaTdcnSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
