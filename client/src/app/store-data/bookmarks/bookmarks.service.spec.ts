import { BookmarksService } from './bookmarks.service';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

describe('BookmarksService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientModule],
    }).compileComponents()
  );

  it('should be created', () => {
    const service: BookmarksService = TestBed.get(BookmarksService);
    expect(service).toBeTruthy();
  });
});
