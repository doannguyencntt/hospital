import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoTonKhoXnListComponent } from './bao-cao-ton-kho-xn-list.component';

describe('BaoCaoTonKhoXnListComponent', () => {
  let component: BaoCaoTonKhoXnListComponent;
  let fixture: ComponentFixture<BaoCaoTonKhoXnListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoTonKhoXnListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoTonKhoXnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
