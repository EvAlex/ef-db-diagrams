import { TestBed, inject } from '@angular/core/testing';

import { FirebaseBackendService } from './firebase-backend.service';

describe('FirebaseBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseBackendService]
    });
  });

  it('should be created', inject([FirebaseBackendService], (service: FirebaseBackendService) => {
    expect(service).toBeTruthy();
  }));
});
