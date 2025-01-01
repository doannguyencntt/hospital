import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanKiemTruocTiemChungTreEmComponent } from './ban-kiem-truoc-tiem-chung-tre-em.component';

describe('BanKiemTruocTiemChungTreEmComponent', () => {
  let component: BanKiemTruocTiemChungTreEmComponent;
  let fixture: ComponentFixture<BanKiemTruocTiemChungTreEmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanKiemTruocTiemChungTreEmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanKiemTruocTiemChungTreEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
