import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuyenPhongComponent } from './chuyen-phong.component';

describe('ChuyenPhongComponent', () => {
  let component: ChuyenPhongComponent;
  let fixture: ComponentFixture<ChuyenPhongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuyenPhongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuyenPhongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
