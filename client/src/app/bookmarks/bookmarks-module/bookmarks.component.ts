import { Component, OnInit } from '@angular/core';

import { Bookmark } from 'src/app/store-data/bookmarks/bookmark.model';
import { BookmarksFacade } from 'src/app/store-data/state/bookmarks/bookmarks.facade';
import { GroupBookmark } from 'src/app/store-data/groupBookmarks/groupBookmark.model';
import { GroupBookmarksFacade } from 'src/app/store-data/state/groupBookmarks/groupBookmarks.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  groupBookmarks$: Observable<GroupBookmark[]> = this.groupBookmarksFacade.allGroupBookmarks$;
  bookmarks$: Observable<Bookmark[]> = this.bookmarksFacade.allBookmarks$;
  currentBookmark$: Observable<Bookmark | undefined> = this.bookmarksFacade.currentBookmark$;

  constructor(
    private bookmarksFacade: BookmarksFacade,
    private groupBookmarksFacade: GroupBookmarksFacade
  ) { }

  ngOnInit() {
    this.groupBookmarksFacade.loadGroupBookmarks();
    this.bookmarksFacade.loadBookmarks();
    this.bookmarksFacade.mutations$.subscribe(_ => this.resetCurrentBookmark());
    this.resetCurrentBookmark();
  }

  resetCurrentBookmark() {
    this.selectBookmark({
      id: null,
      name: null,
      groupBookmarkId: null,
      URL: null
    });
  }

  selectBookmark(bookmark: Bookmark) {
    this.bookmarksFacade.selectBookmark(bookmark.id);
  }

  saveBookmark(bookmark: Bookmark) {
    if (!bookmark.id) {
      this.bookmarksFacade.addBookmark(bookmark);
    } else {
      this.bookmarksFacade.updateBookmark(bookmark);
    }
  }

  deleteBookmark(bookmark: Bookmark) {
    this.bookmarksFacade.deleteBookmark(bookmark);
  }

}
