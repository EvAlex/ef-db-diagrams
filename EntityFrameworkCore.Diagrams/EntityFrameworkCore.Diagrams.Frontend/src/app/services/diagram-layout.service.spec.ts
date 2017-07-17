import { TestBed, inject } from '@angular/core/testing';

import { DiagramLayoutService } from './diagram-layout.service';

describe('DiagramLayoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiagramLayoutService]
    });
  });

  it('should be created', inject([DiagramLayoutService], (service: DiagramLayoutService) => {
    expect(service).toBeTruthy();
  }));
});
