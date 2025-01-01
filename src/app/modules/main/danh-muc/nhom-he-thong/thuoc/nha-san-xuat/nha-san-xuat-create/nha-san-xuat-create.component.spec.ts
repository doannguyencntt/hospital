import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhaSanXuatCreateComponent } from './nha-san-xuat-create.component';

describe('NhaSanXuatCreateComponent', () => {
  let component: NhaSanXuatCreateComponent;
  let fixture: ComponentFixture<NhaSanXuatCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhaSanXuatCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhaSanXuatCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
