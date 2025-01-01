import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhaSanXuatSharedComponent } from './nha-san-xuat-shared.component';

describe('NhaSanXuatSharedComponent', () => {
  let component: NhaSanXuatSharedComponent;
  let fixture: ComponentFixture<NhaSanXuatSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhaSanXuatSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhaSanXuatSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
