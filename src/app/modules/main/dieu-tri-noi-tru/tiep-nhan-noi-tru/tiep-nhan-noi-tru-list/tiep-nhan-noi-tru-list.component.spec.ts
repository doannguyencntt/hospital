import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiepNhanNoiTruListComponent } from './tiep-nhan-noi-tru-list.component';

describe('TiepNhanNoiTruListComponent', () => {
  let component: TiepNhanNoiTruListComponent;
  let fixture: ComponentFixture<TiepNhanNoiTruListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiepNhanNoiTruListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiepNhanNoiTruListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
