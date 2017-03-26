/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TagService } from './tag.service';

describe('TagsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagService]
    });
  });

  it('should ...', inject([TagService], (service: TagService) => {
    expect(service).toBeTruthy();
  }));
});
