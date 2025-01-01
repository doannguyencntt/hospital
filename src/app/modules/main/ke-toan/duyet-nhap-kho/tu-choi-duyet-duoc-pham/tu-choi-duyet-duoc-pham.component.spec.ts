import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuChoiDuyetDuocPhamComponent } from './tu-choi-duyet-duoc-pham.component';

describe('TuChoiDuyetDuocPhamComponent', () => {
  let component: TuChoiDuyetDuocPhamComponent;
  let fixture: ComponentFixture<TuChoiDuyetDuocPhamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuChoiDuyetDuocPhamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuChoiDuyetDuocPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
