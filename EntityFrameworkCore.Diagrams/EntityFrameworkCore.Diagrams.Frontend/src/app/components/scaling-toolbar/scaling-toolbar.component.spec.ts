import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalingToolbarComponent } from './scaling-toolbar.component';

describe('ScalingToolbarComponent', () => {
  let component: ScalingToolbarComponent;
  let fixture: ComponentFixture<ScalingToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScalingToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScalingToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
