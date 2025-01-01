import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetYeuCauChayLaiListComponent } from './duyet-yeu-cau-chay-lai-list.component';

describe('DuyetYeuCauChayLaiListComponent', () => {
  let component: DuyetYeuCauChayLaiListComponent;
  let fixture: ComponentFixture<DuyetYeuCauChayLaiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuyetYeuCauChayLaiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyetYeuCauChayLaiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
