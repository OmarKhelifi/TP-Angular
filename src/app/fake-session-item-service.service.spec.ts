import { TestBed } from '@angular/core/testing';

import { FakeSessionItemServiceService } from './fake-session-item-service.service';

describe('FakeSessionItemServiceService', () => {
  let service: FakeSessionItemServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeSessionItemServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
