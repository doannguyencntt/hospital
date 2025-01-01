import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPopupEditThuocCoDauComponent } from './show-popup-edit-thuoc-co-dau.component';

describe('ShowPopupEditThuocCoDauComponent', () => {
  let component: ShowPopupEditThuocCoDauComponent;
  let fixture: ComponentFixture<ShowPopupEditThuocCoDauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPopupEditThuocCoDauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPopupEditThuocCoDauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
