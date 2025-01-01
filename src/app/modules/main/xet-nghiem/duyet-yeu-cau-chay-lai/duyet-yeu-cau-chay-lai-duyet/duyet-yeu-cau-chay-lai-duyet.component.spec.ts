import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetYeuCauChayLaiDuyetComponent } from './duyet-yeu-cau-chay-lai-duyet.component';

describe('DuyetYeuCauChayLaiDuyetComponent', () => {
  let component: DuyetYeuCauChayLaiDuyetComponent;
  let fixture: ComponentFixture<DuyetYeuCauChayLaiDuyetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuyetYeuCauChayLaiDuyetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyetYeuCauChayLaiDuyetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
