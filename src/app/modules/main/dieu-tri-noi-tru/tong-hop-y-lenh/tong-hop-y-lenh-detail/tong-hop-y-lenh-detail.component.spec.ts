import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongHopYLenhDetailComponent } from './tong-hop-y-lenh-detail.component';

describe('TongHopYLenhDetailComponent', () => {
  let component: TongHopYLenhDetailComponent;
  let fixture: ComponentFixture<TongHopYLenhDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongHopYLenhDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongHopYLenhDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
