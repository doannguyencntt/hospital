import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BienBanInCamKetGayTeComponent } from './bien-ban-in-cam-ket-gay-te.component';

describe('BienBanInCamKetGayTeComponent', () => {
  let component: BienBanInCamKetGayTeComponent;
  let fixture: ComponentFixture<BienBanInCamKetGayTeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienBanInCamKetGayTeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BienBanInCamKetGayTeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
