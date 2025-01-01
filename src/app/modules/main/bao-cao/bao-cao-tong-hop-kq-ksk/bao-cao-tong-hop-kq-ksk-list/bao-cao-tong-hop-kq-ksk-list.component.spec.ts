import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoTongHopKqKskListComponent } from './bao-cao-tong-hop-kq-ksk-list.component';

describe('BaoCaoTongHopKqKskListComponent', () => {
  let component: BaoCaoTongHopKqKskListComponent;
  let fixture: ComponentFixture<BaoCaoTongHopKqKskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoTongHopKqKskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoTongHopKqKskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
