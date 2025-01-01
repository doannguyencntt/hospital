import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiepNhanBenhNhanTaiKhamComponent } from './tiep-nhan-benh-nhan-tai-kham.component';

describe('TiepNhanBenhNhanTaiKhamComponent', () => {
  let component: TiepNhanBenhNhanTaiKhamComponent;
  let fixture: ComponentFixture<TiepNhanBenhNhanTaiKhamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiepNhanBenhNhanTaiKhamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiepNhanBenhNhanTaiKhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
