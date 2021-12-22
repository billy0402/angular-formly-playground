import { TestBed } from '@angular/core/testing';

import { AppFormlyService } from './app-formly.service';

describe('AppFormlyService', () => {
  let service: AppFormlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppFormlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
