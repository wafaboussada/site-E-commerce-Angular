import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularChoiceComponent } from './popular-choice.component';

describe('PopularChoiceComponent', () => {
  let component: PopularChoiceComponent;
  let fixture: ComponentFixture<PopularChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
