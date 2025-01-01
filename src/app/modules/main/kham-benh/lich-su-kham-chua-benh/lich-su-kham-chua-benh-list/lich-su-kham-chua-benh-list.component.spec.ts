import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuKhamChuaBenhListComponent } from './lich-su-kham-chua-benh-list.component';

describe('LichSuKhamChuaBenhListComponent', () => {
  let component: LichSuKhamChuaBenhListComponent;
  let fixture: ComponentFixture<LichSuKhamChuaBenhListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuKhamChuaBenhListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuKhamChuaBenhListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
