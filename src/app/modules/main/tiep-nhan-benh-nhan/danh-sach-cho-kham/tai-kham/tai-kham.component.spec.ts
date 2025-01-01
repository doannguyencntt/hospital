import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaiKhamComponent } from './tai-kham.component';

describe('TaiKhamComponent', () => {
  let component: TaiKhamComponent;
  let fixture: ComponentFixture<TaiKhamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaiKhamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaiKhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
