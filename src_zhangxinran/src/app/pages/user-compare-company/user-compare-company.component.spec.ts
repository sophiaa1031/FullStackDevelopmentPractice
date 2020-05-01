import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCompareCompanyComponent } from './user-compare-company.component';

describe('UserCompareCompanyComponent', () => {
  let component: UserCompareCompanyComponent;
  let fixture: ComponentFixture<UserCompareCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCompareCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCompareCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
