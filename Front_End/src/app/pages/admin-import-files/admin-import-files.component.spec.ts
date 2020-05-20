import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImportFilesComponent } from './admin-import-files.component';

describe('AdminImportFilesComponent', () => {
  let component: AdminImportFilesComponent;
  let fixture: ComponentFixture<AdminImportFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminImportFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminImportFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
