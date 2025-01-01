import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamBenhChoKhamListComponent } from './kham-benh-cho-kham-list.component';

describe('KhamBenhChoKhamListComponent', () => {
  let component: KhamBenhChoKhamListComponent;
  let fixture: ComponentFixture<KhamBenhChoKhamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamBenhChoKhamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamBenhChoKhamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
