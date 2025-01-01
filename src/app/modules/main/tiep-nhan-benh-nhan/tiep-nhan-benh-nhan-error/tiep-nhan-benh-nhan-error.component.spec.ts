import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiepNhanBenhNhanErrorComponent } from './tiep-nhan-benh-nhan-error.component';

describe('TiepNhanBenhNhanErrorComponent', () => {
  let component: TiepNhanBenhNhanErrorComponent;
  let fixture: ComponentFixture<TiepNhanBenhNhanErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiepNhanBenhNhanErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiepNhanBenhNhanErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
