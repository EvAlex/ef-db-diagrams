import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbDiagramComponent } from './db-diagram.component';

describe('DbDiagramComponent', () => {
  let component: DbDiagramComponent;
  let fixture: ComponentFixture<DbDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
