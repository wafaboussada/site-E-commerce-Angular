import { TestBed } from '@angular/core/testing';

import { UsersService.ServiceService } from './users-service.service.service';

describe('UsersService.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersService.ServiceService = TestBed.get(UsersService.ServiceService);
    expect(service).toBeTruthy();
  });
});
