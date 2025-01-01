import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongHopYLenhDetailBackgroundComponent } from './tong-hop-y-lenh-detail-background.component';

describe('TongHopYLenhDetailBackgroundComponent', () => {
  let component: TongHopYLenhDetailBackgroundComponent;
  let fixture: ComponentFixture<TongHopYLenhDetailBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongHopYLenhDetailBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongHopYLenhDetailBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
