import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhongDuyetComponent } from './khong-duyet.component';

describe('KhongDuyetComponent', () => {
  let component: KhongDuyetComponent;
  let fixture: ComponentFixture<KhongDuyetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhongDuyetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhongDuyetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
