import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent } from './bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list.component';

describe('BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent', () => {
  let component: BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent;
  let fixture: ComponentFixture<BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
