import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderregistrationComponent } from './headerregistration.component';

describe('HeaderregistrationComponent', () => {
  let component: HeaderregistrationComponent;
  let fixture: ComponentFixture<HeaderregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
