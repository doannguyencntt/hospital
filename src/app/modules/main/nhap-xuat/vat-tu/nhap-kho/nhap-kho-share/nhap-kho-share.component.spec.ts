import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhapKhoShareComponent } from './nhap-kho-share.component';

describe('NhapKhoShareComponent', () => {
  let component: NhapKhoShareComponent;
  let fixture: ComponentFixture<NhapKhoShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhapKhoShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhapKhoShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
