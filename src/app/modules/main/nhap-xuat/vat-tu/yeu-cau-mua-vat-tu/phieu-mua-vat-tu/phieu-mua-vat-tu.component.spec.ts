import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuMuaVatTuComponent } from './phieu-mua-vat-tu.component';

describe('PhieuMuaVatTuComponent', () => {
  let component: PhieuMuaVatTuComponent;
  let fixture: ComponentFixture<PhieuMuaVatTuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuMuaVatTuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuMuaVatTuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
