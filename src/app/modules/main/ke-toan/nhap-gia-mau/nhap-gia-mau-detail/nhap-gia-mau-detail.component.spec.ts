import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhapGiaMauDetailComponent } from './nhap-gia-mau-detail.component';

describe('NhapGiaMauDetailComponent', () => {
  let component: NhapGiaMauDetailComponent;
  let fixture: ComponentFixture<NhapGiaMauDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhapGiaMauDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhapGiaMauDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
