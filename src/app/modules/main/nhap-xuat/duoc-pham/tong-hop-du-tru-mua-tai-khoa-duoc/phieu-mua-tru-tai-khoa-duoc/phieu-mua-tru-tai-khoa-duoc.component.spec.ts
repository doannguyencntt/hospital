import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuMuaTruTaiKhoaDuocComponent } from './phieu-mua-tru-tai-khoa-duoc.component';

describe('PhieuMuaTruTaiKhoaDuocComponent', () => {
  let component: PhieuMuaTruTaiKhoaDuocComponent;
  let fixture: ComponentFixture<PhieuMuaTruTaiKhoaDuocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuMuaTruTaiKhoaDuocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuMuaTruTaiKhoaDuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
