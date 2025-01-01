import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinSanKhoaMoComponent } from './thong-tin-san-khoa-mo.component';

describe('ThongTinSanKhoaMoComponent', () => {
  let component: ThongTinSanKhoaMoComponent;
  let fixture: ComponentFixture<ThongTinSanKhoaMoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinSanKhoaMoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinSanKhoaMoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
