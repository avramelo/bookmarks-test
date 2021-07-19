import { GroupBookmarksService } from './groupBookmarks.service';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

describe('GroupBookmarksService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [  ],
    imports:[
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: GroupBookmarksService = TestBed.get(GroupBookmarksService);
    expect(service).toBeTruthy();
  });
});
