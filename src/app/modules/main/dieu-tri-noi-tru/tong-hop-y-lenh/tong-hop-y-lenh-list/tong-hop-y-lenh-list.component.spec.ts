import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongHopYLenhListComponent } from './tong-hop-y-lenh-list.component';

describe('TongHopYLenhListComponent', () => {
  let component: TongHopYLenhListComponent;
  let fixture: ComponentFixture<TongHopYLenhListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongHopYLenhListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongHopYLenhListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
