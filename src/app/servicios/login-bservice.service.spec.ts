import { TestBed } from '@angular/core/testing';

import { LoginBServiceService } from './login-bservice.service';

describe('LoginBServiceService', () => {
  let service: LoginBServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginBServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
