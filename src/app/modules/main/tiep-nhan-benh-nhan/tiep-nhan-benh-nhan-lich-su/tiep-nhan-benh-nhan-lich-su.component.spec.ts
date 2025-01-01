import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiepNhanBenhNhanLichSuComponent } from './tiep-nhan-benh-nhan-lich-su.component';

describe('TiepNhanBenhNhanLichSuComponent', () => {
  let component: TiepNhanBenhNhanLichSuComponent;
  let fixture: ComponentFixture<TiepNhanBenhNhanLichSuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiepNhanBenhNhanLichSuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiepNhanBenhNhanLichSuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
