import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoSoNhanVienUpdateComponent } from './ho-so-nhan-vien-update.component';

describe('HoSoNhanVienUpdateComponent', () => {
  let component: HoSoNhanVienUpdateComponent;
  let fixture: ComponentFixture<HoSoNhanVienUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoSoNhanVienUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoSoNhanVienUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
