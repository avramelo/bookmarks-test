import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { prepareListState, trackItem } from 'src/app/utils/helper-functions.utils';

import { Bookmark } from 'src/app/store-data/bookmarks/bookmark.model';
import { GroupBookmark } from 'src/app/store-data/groupBookmarks/groupBookmark.model';
import { GroupedBookmarksWithBookmarks } from 'src/app/store-data/groupBookmarks/groupBookmarkWithBookmarks.model';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-grouped-bookmarks-list',
  templateUrl: './grouped-bookmarks-list.component.html',
  styleUrls: ['./grouped-bookmarks-list.component.scss']
})
export class GroupedBookmarksListComponent {
  @Input() groupedBookmarks!: GroupBookmark[];
  @Input() bookmarks!: Bookmark[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() addNewGroup = new EventEmitter();

  animationsDisabled = true;
  groupBookmarksWithBookmarks: GroupedBookmarksWithBookmarks[] | undefined;

  trackItem = trackItem;

  prepareListState = prepareListState;

  getGroupBookmarks(group: GroupBookmark) {
    return this.bookmarks?.filter(
      bookmark => bookmark.groupBookmarkId == group.id
    );
  }
}
