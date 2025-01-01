import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayMauXetNghiemDetailComponent } from './lay-mau-xet-nghiem-detail.component';

describe('LayMauXetNghiemDetailComponent', () => {
  let component: LayMauXetNghiemDetailComponent;
  let fixture: ComponentFixture<LayMauXetNghiemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayMauXetNghiemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayMauXetNghiemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
