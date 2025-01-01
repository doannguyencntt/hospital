import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiepNhanBenhNhanComponent } from './tiep-nhan-benh-nhan.component';

describe('TiepNhanBenhNhanComponent', () => {
  let component: TiepNhanBenhNhanComponent;
  let fixture: ComponentFixture<TiepNhanBenhNhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiepNhanBenhNhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiepNhanBenhNhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
