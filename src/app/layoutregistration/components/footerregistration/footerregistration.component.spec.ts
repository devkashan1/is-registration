import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterregistrationComponent } from './footerregistration.component';

describe('FooterregistrationComponent', () => {
  let component: FooterregistrationComponent;
  let fixture: ComponentFixture<FooterregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
