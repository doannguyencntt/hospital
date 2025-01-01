import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsTongHopDuTruMuaThuocTaiKhoaComponent } from './ds-tong-hop-du-tru-mua-thuoc-tai-khoa.component';

describe('DsTongHopDuTruMuaThuocTaiKhoaComponent', () => {
  let component: DsTongHopDuTruMuaThuocTaiKhoaComponent;
  let fixture: ComponentFixture<DsTongHopDuTruMuaThuocTaiKhoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsTongHopDuTruMuaThuocTaiKhoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsTongHopDuTruMuaThuocTaiKhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
