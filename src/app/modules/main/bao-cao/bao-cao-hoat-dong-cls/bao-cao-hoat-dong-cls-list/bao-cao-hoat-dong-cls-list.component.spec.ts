import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoHoatDongClsListComponent } from './bao-cao-hoat-dong-cls-list.component';

describe('BaoCaoHoatDongClsListComponent', () => {
  let component: BaoCaoHoatDongClsListComponent;
  let fixture: ComponentFixture<BaoCaoHoatDongClsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoHoatDongClsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoHoatDongClsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
