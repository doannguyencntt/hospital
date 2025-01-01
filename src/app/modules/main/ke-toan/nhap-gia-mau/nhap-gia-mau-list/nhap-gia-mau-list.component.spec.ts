import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhapGiaMauListComponent } from './nhap-gia-mau-list.component';

describe('NhapGiaMauListComponent', () => {
  let component: NhapGiaMauListComponent;
  let fixture: ComponentFixture<NhapGiaMauListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhapGiaMauListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhapGiaMauListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
