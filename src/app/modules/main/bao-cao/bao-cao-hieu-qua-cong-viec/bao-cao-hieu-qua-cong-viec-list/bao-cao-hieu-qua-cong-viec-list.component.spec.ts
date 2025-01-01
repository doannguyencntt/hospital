import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoHieuQuaCongViecListComponent } from './bao-cao-hieu-qua-cong-viec-list.component';

describe('BaoCaoHieuQuaCongViecListComponent', () => {
  let component: BaoCaoHieuQuaCongViecListComponent;
  let fixture: ComponentFixture<BaoCaoHieuQuaCongViecListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoHieuQuaCongViecListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoHieuQuaCongViecListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
