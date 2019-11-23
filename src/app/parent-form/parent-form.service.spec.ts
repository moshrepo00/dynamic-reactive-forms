import { TestBed } from '@angular/core/testing';

import { ParentFormService } from './parent-form.service';

describe('ParentFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParentFormService = TestBed.get(ParentFormService);
    expect(service).toBeTruthy();
  });
});
