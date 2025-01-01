import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayMauXetNghiemInPhieuGuiMauComponent } from './lay-mau-xet-nghiem-in-phieu-gui-mau.component';

describe('LayMauXetNghiemInPhieuGuiMauComponent', () => {
  let component: LayMauXetNghiemInPhieuGuiMauComponent;
  let fixture: ComponentFixture<LayMauXetNghiemInPhieuGuiMauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayMauXetNghiemInPhieuGuiMauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayMauXetNghiemInPhieuGuiMauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
