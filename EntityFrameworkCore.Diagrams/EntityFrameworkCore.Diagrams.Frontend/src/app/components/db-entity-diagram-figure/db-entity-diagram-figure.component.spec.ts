import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbEntityDiagramFigureComponent } from './db-entity-diagram-figure.component';

describe('DbEntityDiagramFigureComponent', () => {
  let component: DbEntityDiagramFigureComponent;
  let fixture: ComponentFixture<DbEntityDiagramFigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbEntityDiagramFigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbEntityDiagramFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
