import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoSoNhanVienListComponent } from './ho-so-nhan-vien-list.component';

describe('HoSoNhanVienListComponent', () => {
  let component: HoSoNhanVienListComponent;
  let fixture: ComponentFixture<HoSoNhanVienListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoSoNhanVienListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoSoNhanVienListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
