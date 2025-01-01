import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuTheoDoiChucNangSongComponent } from './phieu-theo-doi-chuc-nang-song.component';

describe('PhieuTheoDoiChucNangSongComponent', () => {
  let component: PhieuTheoDoiChucNangSongComponent;
  let fixture: ComponentFixture<PhieuTheoDoiChucNangSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhieuTheoDoiChucNangSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuTheoDoiChucNangSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
