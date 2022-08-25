import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciptsampleComponent } from './reciptsample.component';

describe('ReciptsampleComponent', () => {
  let component: ReciptsampleComponent;
  let fixture: ComponentFixture<ReciptsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciptsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciptsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
