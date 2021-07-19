import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { BookmarksComponent } from './bookmarks.component';
import { BookmarksFacade } from 'src/app/store-data/state/bookmarks/bookmarks.facade';
import { BookmarksStubFacade } from 'src/app/store-data/mock/bookmarks.facade.stub';
import { GroupBookmarksFacade } from 'src/app/store-data/state/groupBookmarks/groupBookmarks.facade';
import { GroupBookmarksFacadeStub } from 'src/app/store-data/mock/groupBookmarks.facade.stub';

describe('BookmarksComponent', () => {
  let component: BookmarksComponent;
  let fixture: ComponentFixture<BookmarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookmarksComponent],
      providers: [
        {
          provide: GroupBookmarksFacade,
          useValue: new GroupBookmarksFacadeStub(),
        },
        { provide: BookmarksFacade, useValue: new BookmarksStubFacade() },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
