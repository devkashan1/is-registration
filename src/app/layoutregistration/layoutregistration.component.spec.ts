import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutregistrationComponent } from './layoutregistration.component';

describe('LayoutregistrationComponent', () => {
  let component: LayoutregistrationComponent;
  let fixture: ComponentFixture<LayoutregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
