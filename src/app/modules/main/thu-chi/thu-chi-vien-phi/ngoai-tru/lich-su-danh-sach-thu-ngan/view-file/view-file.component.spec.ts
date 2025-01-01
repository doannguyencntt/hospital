import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewFileCompoment } from './view-file.component';
describe('ViewFileCompoment', () => {
  let component: ViewFileCompoment;
  let fixture: ComponentFixture<ViewFileCompoment>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFileCompoment ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFileCompoment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
