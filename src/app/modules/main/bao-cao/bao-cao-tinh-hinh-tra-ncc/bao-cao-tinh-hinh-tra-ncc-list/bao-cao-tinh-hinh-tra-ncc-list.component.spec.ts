import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoTinhHinhTraNccListComponent } from './bao-cao-tinh-hinh-tra-ncc-list.component';

describe('BaoCaoTinhHinhTraNccListComponent', () => {
  let component: BaoCaoTinhHinhTraNccListComponent;
  let fixture: ComponentFixture<BaoCaoTinhHinhTraNccListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoTinhHinhTraNccListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoTinhHinhTraNccListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
