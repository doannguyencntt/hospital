import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanKhamHienTaiLsClsComponent } from './lan-kham-hien-tai-ls-cls.component';

describe('LanKhamHienTaiLsClsComponent', () => {
  let component: LanKhamHienTaiLsClsComponent;
  let fixture: ComponentFixture<LanKhamHienTaiLsClsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanKhamHienTaiLsClsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanKhamHienTaiLsClsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
