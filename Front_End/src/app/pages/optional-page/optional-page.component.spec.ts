import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalPageComponent } from './optional-page.component';

describe('OptionalPageComponent', () => {
  let component: OptionalPageComponent;
  let fixture: ComponentFixture<OptionalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
