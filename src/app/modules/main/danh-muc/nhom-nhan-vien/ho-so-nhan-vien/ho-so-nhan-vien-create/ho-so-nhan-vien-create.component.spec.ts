import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoSoNhanVienCreateComponent } from './ho-so-nhan-vien-create.component';

describe('HoSoNhanVienCreateComponent', () => {
  let component: HoSoNhanVienCreateComponent;
  let fixture: ComponentFixture<HoSoNhanVienCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoSoNhanVienCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoSoNhanVienCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
