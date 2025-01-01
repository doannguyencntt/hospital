import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BieuDoChuyenDaComponent } from './bieu-do-chuyen-da.component';

describe('BieuDoChuyenDaComponent', () => {
  let component: BieuDoChuyenDaComponent;
  let fixture: ComponentFixture<BieuDoChuyenDaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BieuDoChuyenDaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BieuDoChuyenDaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
