import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuyenKhoaComponent } from './chuyen-khoa.component';

describe('ChuyenKhoaComponent', () => {
  let component: ChuyenKhoaComponent;
  let fixture: ComponentFixture<ChuyenKhoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuyenKhoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuyenKhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
