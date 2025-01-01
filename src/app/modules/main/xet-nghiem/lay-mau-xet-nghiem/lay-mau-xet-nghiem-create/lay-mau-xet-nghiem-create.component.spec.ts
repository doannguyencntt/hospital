import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayMauXetNghiemCreateComponent } from './lay-mau-xet-nghiem-create.component';

describe('LayMauXetNghiemCreateComponent', () => {
  let component: LayMauXetNghiemCreateComponent;
  let fixture: ComponentFixture<LayMauXetNghiemCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayMauXetNghiemCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayMauXetNghiemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
