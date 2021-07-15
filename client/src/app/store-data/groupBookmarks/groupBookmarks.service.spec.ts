import { GroupBookmarksService } from './groupBookmarks.service';
import { TestBed } from '@angular/core/testing';

describe('GroupBookmarksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupBookmarksService = TestBed.get(GroupBookmarksService);
    expect(service).toBeTruthy();
  });
});
