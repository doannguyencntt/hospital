import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietKhamChuaBenhComponent } from './chi-tiet-kham-chua-benh.component';

describe('ChiTietKhamChuaBenhComponent', () => {
  let component: ChiTietKhamChuaBenhComponent;
  let fixture: ComponentFixture<ChiTietKhamChuaBenhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietKhamChuaBenhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietKhamChuaBenhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
