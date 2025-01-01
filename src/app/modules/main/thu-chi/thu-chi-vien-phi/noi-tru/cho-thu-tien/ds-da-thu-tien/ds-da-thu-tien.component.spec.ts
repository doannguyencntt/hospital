import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsDaThuTienComponent } from './ds-da-thu-tien.component';

describe('DsDaThuTienComponent', () => {
  let component: DsDaThuTienComponent;
  let fixture: ComponentFixture<DsDaThuTienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsDaThuTienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsDaThuTienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
