import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbRelationConnectorComponent } from './db-relation-connector.component';

describe('DbRelationConnectorComponent', () => {
  let component: DbRelationConnectorComponent;
  let fixture: ComponentFixture<DbRelationConnectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbRelationConnectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbRelationConnectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
