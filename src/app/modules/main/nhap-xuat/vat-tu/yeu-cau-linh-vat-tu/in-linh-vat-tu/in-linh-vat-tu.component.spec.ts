import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InLinhVatTuComponent } from './in-linh-vat-tu.component';

describe('InLinhVatTuComponent', () => {
  let component: InLinhVatTuComponent;
  let fixture: ComponentFixture<InLinhVatTuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InLinhVatTuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InLinhVatTuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
