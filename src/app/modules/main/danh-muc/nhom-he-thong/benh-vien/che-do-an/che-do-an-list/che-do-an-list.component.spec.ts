import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChucDanhListComponent } from './che-do-an-list.component';

describe('ChucDanhListComponent', () => {
  let component: ChucDanhListComponent;
  let fixture: ComponentFixture<ChucDanhListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChucDanhListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChucDanhListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
