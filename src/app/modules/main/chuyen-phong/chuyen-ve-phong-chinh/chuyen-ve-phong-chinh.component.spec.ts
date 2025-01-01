import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuyenVePhongChinhComponent } from './chuyen-ve-phong-chinh.component';
describe('ChuyenVePhongChinhComponent', () => {
  let component: ChuyenVePhongChinhComponent;
  let fixture: ComponentFixture<ChuyenVePhongChinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuyenVePhongChinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuyenVePhongChinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
