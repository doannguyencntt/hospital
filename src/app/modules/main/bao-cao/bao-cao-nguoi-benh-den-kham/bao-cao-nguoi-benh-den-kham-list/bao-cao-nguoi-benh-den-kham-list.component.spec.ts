import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoNguoiBenhDenKhamListComponent } from './bao-cao-nguoi-benh-den-kham-list.component';

describe('BaoCaoNguoiBenhDenKhamListComponent', () => {
  let component: BaoCaoNguoiBenhDenKhamListComponent;
  let fixture: ComponentFixture<BaoCaoNguoiBenhDenKhamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoNguoiBenhDenKhamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoNguoiBenhDenKhamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
