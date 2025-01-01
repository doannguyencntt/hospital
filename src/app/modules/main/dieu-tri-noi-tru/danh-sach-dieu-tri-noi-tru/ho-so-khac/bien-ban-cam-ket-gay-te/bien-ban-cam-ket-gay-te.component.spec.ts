import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BienBanCamKetGayTeComponent } from './bien-ban-cam-ket-gay-te.component';

describe('BienBanCamKetGayTeComponent', () => {
  let component: BienBanCamKetGayTeComponent;
  let fixture: ComponentFixture<BienBanCamKetGayTeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienBanCamKetGayTeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BienBanCamKetGayTeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
