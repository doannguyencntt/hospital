import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhaSanXuatUpdateComponent } from './nha-san-xuat-update.component';

describe('NhaSanXuatUpdateComponent', () => {
  let component: NhaSanXuatUpdateComponent;
  let fixture: ComponentFixture<NhaSanXuatUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhaSanXuatUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhaSanXuatUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
