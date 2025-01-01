import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinHoSoCuaToiComponent } from './thong-tin-ho-so-cua-toi.component';

describe('ThongTinHoSoCuaToiComponent', () => {
  let component: ThongTinHoSoCuaToiComponent;
  let fixture: ComponentFixture<ThongTinHoSoCuaToiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinHoSoCuaToiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinHoSoCuaToiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
