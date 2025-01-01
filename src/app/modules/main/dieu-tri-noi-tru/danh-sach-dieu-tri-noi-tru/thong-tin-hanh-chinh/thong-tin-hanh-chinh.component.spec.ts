import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinHanhChinhComponent } from './thong-tin-hanh-chinh.component';

describe('ThongTinHanhChinhComponent', () => {
  let component: ThongTinHanhChinhComponent;
  let fixture: ComponentFixture<ThongTinHanhChinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinHanhChinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinHanhChinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
