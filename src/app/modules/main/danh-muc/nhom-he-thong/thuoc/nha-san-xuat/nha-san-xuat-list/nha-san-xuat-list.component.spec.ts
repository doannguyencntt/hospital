import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhaSanXuatListComponent } from './nha-san-xuat-list.component';

describe('NhaSanXuatListComponent', () => {
  let component: NhaSanXuatListComponent;
  let fixture: ComponentFixture<NhaSanXuatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhaSanXuatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhaSanXuatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
