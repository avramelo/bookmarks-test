import { Component, OnInit } from '@angular/core';

import { Bookmark } from 'src/app/store-data/bookmarks/bookmark.model';
import { BookmarksFacade } from 'src/app/store-data/state/bookmarks/bookmarks.facade';
import { GroupBookmark } from 'src/app/store-data/groupBookmarks/groupBookmark.model';
import { GroupBookmarksFacade } from 'src/app/store-data/state/groupBookmarks/groupBookmarks.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grouped-bookmarks',
  templateUrl: './grouped-bookmarks.component.html',
  styleUrls: ['./grouped-bookmarks.component.scss'],
})
export class GroupedBookmarksComponent implements OnInit {
  groupedBookmarks$: Observable<GroupBookmark[]> =
    this.groupBookmarksFacade.allGroupBookmarks$;
  bookmarks$: Observable<Bookmark[]> = this.bookmarksFacade.allBookmarks$;

  constructor(
    private groupBookmarksFacade: GroupBookmarksFacade,
    private bookmarksFacade: BookmarksFacade
  ) {}

  ngOnInit() {
    this.groupBookmarksFacade.loadGroupBookmarks();
    this.bookmarksFacade.loadBookmarks();
  }

  addNewGroupBookmark() {
    // Here we should implement similar logic to add bookmark
  }
}
