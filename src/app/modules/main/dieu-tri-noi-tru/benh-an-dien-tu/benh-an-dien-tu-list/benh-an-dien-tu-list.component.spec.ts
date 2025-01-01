import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenhAnDienTuListComponent } from './benh-an-dien-tu-list.component';

describe('BenhAnDienTuListComponent', () => {
  let component: BenhAnDienTuListComponent;
  let fixture: ComponentFixture<BenhAnDienTuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenhAnDienTuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenhAnDienTuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
