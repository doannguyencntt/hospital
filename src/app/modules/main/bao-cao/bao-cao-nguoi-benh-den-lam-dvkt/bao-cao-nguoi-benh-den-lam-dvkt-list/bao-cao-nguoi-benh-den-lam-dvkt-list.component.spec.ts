import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoNguoiBenhDenLamDvktListComponent } from './bao-cao-nguoi-benh-den-lam-dvkt-list.component';

describe('BaoCaoNguoiBenhDenLamDvktListComponent', () => {
  let component: BaoCaoNguoiBenhDenLamDvktListComponent;
  let fixture: ComponentFixture<BaoCaoNguoiBenhDenLamDvktListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoNguoiBenhDenLamDvktListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoNguoiBenhDenLamDvktListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
