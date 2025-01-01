import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayMauXetNghiemListComponent } from './lay-mau-xet-nghiem-list.component';

describe('LayMauXetNghiemListComponent', () => {
  let component: LayMauXetNghiemListComponent;
  let fixture: ComponentFixture<LayMauXetNghiemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayMauXetNghiemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayMauXetNghiemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
