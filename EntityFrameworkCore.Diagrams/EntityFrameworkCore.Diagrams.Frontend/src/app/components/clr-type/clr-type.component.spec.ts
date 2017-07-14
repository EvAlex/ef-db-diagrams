import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClrTypeComponent } from './clr-type.component';

describe('ClrTypeComponent', () => {
  let component: ClrTypeComponent;
  let fixture: ComponentFixture<ClrTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClrTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClrTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
