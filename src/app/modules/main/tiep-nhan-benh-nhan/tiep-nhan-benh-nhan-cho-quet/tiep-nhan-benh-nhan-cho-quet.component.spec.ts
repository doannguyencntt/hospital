import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiepNhanBenhNhanChoQuetComponent } from './tiep-nhan-benh-nhan-cho-quet.component';

describe('TiepNhanBenhNhanChoQuetComponent', () => {
  let component: TiepNhanBenhNhanChoQuetComponent;
  let fixture: ComponentFixture<TiepNhanBenhNhanChoQuetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiepNhanBenhNhanChoQuetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiepNhanBenhNhanChoQuetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
