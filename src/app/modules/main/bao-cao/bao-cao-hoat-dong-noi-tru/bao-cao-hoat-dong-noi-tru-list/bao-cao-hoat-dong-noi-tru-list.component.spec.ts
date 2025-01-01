import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoHoatDongNoiTruListComponent } from './bao-cao-hoat-dong-noi-tru-list.component';

describe('BaoCaoHoatDongNoiTruListComponent', () => {
  let component: BaoCaoHoatDongNoiTruListComponent;
  let fixture: ComponentFixture<BaoCaoHoatDongNoiTruListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoHoatDongNoiTruListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoHoatDongNoiTruListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
